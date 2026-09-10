import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiMinus, FiPlus, FiMaximize } from "react-icons/fi";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist";
import workerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";

GlobalWorkerOptions.workerSrc = workerUrl;

export default function PdfReader({ source, title }) {
  const [pdf, setPdf] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [zoom, setZoom] = useState(1);
  const [width, setWidth] = useState(0);
  const [attempt, setAttempt] = useState(0);
  const [error, setError] = useState("");
  const [rendering, setRendering] = useState(true);
  const [pageText, setPageText] = useState("");
  const viewportRef = useRef(null);
  const canvasHostRef = useRef(null);

  useEffect(() => {
    const container = viewportRef.current;
    const observer = new ResizeObserver(([entry]) => setWidth(Math.floor(entry.contentRect.width)));
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let cancelled = false;
    setError("");
    setPdf(null);
    setRendering(true);
    const task = getDocument({ url: source, standardFontDataUrl: "/pdfjs/standard_fonts/" });
    task.promise.then((document) => {
      if (!cancelled) setPdf(document);
    }).catch(() => {
      if (!cancelled) {
        setError("No se pudo cargar el documento. Inténtalo de nuevo o contacta con Grinox.");
        setRendering(false);
      }
    });
    return () => { cancelled = true; void task.destroy(); };
  }, [source, attempt]);

  useEffect(() => {
    if (!pdf || !width) return;
    let cancelled = false;
    let renderTask;
    setRendering(true);
    setError("");
    setPageText("");

    async function renderPage() {
      try {
        const page = await pdf.getPage(pageNumber);
        if (cancelled) return;
        const baseViewport = page.getViewport({ scale: 1 });
        const scale = (Math.max(1, Math.min(width, 920)) / baseViewport.width) * zoom;
        const viewport = page.getViewport({ scale });
        const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
        // Render off-screen, then replace the previous page atomically. A cancelled
        // render never shares a canvas with a subsequent page or zoom operation.
        const canvas = document.createElement("canvas");
        canvas.width = Math.ceil(viewport.width * pixelRatio);
        canvas.height = Math.ceil(viewport.height * pixelRatio);
        canvas.style.width = `${viewport.width}px`;
        canvas.style.height = `${viewport.height}px`;
        canvas.setAttribute("aria-hidden", "true");
        renderTask = page.render({ canvasContext: canvas.getContext("2d"), viewport, transform: [pixelRatio, 0, 0, pixelRatio, 0, 0] });
        await renderTask.promise;
        if (cancelled) return;
        canvasHostRef.current.replaceChildren(canvas);
        setRendering(false);
        const content = await page.getTextContent();
        if (!cancelled) setPageText(content.items.map((item) => item.str || "").join(" "));
      } catch (reason) {
        if (!cancelled && reason.name !== "RenderingCancelledException") {
          setError("No se pudo mostrar el documento. Inténtalo de nuevo o contacta con Grinox.");
          setRendering(false);
        }
      }
    }

    void renderPage();
    return () => { cancelled = true; renderTask?.cancel(); };
  }, [pdf, pageNumber, zoom, width]);

  const unavailable = !pdf || Boolean(error);
  return (
    <div className="pdf-reader">
      <div className="pdf-toolbar" role="group" aria-label="Controles de lectura del documento">
        <span className="pdf-title">{title}</span>
        <div className="pdf-controls">
          <div className="pdf-control-group"><button type="button" aria-label="Página anterior" title="Página anterior" disabled={unavailable || pageNumber <= 1} onClick={() => setPageNumber((page) => Math.max(1, page - 1))}><FiChevronLeft /></button><span className="pdf-page-count">{pdf ? `${pageNumber} / ${pdf.numPages}` : "— / —"}</span><button type="button" aria-label="Página siguiente" title="Página siguiente" disabled={unavailable || pageNumber >= pdf.numPages} onClick={() => setPageNumber((page) => Math.min(pdf.numPages, page + 1))}><FiChevronRight /></button></div>
          <div className="pdf-control-group"><button type="button" aria-label="Reducir zoom" title="Reducir zoom" disabled={unavailable || zoom <= 0.75} onClick={() => setZoom((value) => Math.max(0.75, value - 0.25))}><FiMinus /></button><span className="pdf-zoom">{Math.round(zoom * 100)}%</span><button type="button" aria-label="Ampliar zoom" title="Ampliar zoom" disabled={unavailable || zoom >= 2} onClick={() => setZoom((value) => Math.min(2, value + 0.25))}><FiPlus /></button><button type="button" aria-label="Ajustar al ancho" title="Ajustar al ancho" disabled={unavailable} onClick={() => setZoom(1)}><FiMaximize /></button></div>
        </div>
      </div>
      <div className="pdf-stage" ref={viewportRef} tabIndex={0} role="region" aria-label={`${title}, área de lectura con desplazamiento`} aria-busy={rendering}>
        <div className="pdf-status" role="status" aria-live="polite">{error ? <div className="pdf-error"><p>{error}</p><button type="button" onClick={() => setAttempt((value) => value + 1)}>Volver a intentar</button></div> : rendering ? "Cargando documento…" : <span className="certificate-sr-only">Página {pageNumber} de {pdf?.numPages}, zoom {Math.round(zoom * 100)}%.</span>}</div>
        {/* Keep the previous page in layout while rendering its replacement.
            Removing it changes scrollbar width and can retrigger ResizeObserver. */}
        <div ref={canvasHostRef} className={`pdf-canvas-host${error ? " pdf-canvas-hidden" : ""}`} />
        <p className="certificate-sr-only">{pageText}</p>
      </div>
      <p className="pdf-hint">Utiliza el zoom para ampliar el documento y desplázate para recorrer la página.</p>
    </div>
  );
}
