import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiFileText } from "react-icons/fi";
import "./CertificatePage.css";

const PdfReader = lazy(() => import("./PdfReader"));

export default function CertificatePage({ code, source, otherCode, otherPath }) {
  return (
    <main className="certificate-page">
      <header className="certificate-intro">
        <div className="certificate-container">
          <nav className="certificate-breadcrumb" aria-label="Ruta de navegación"><Link to="/">Inicio</Link><span aria-hidden="true">/</span><span aria-current="page">Certificado {code}</span></nav>
          <div className="certificate-heading"><div><p className="certificate-eyebrow">DOCUMENTACIÓN GRINOX</p><h1>Certificado <em>{code}</em></h1><p>Consulta el documento de Grinox Montaje Industrial.</p></div><span className="certificate-badge" aria-hidden="true"><FiFileText />{code}</span></div>
        </div>
      </header>
      <section className="certificate-container certificate-content" aria-label={`Consulta del certificado ${code}`}>
        <Suspense fallback={<div className="certificate-loading" role="status">Preparando el visor…</div>}><PdfReader key={source} source={source} title={`Certificado ${code}`} /></Suspense>
        <div className="certificate-help"><p>¿Necesitas más información sobre nuestra documentación?</p><Link to="/contacto">Contacta con Grinox <FiArrowUpRight aria-hidden="true" /></Link></div>
      </section>
      <div className="certificate-related"><div className="certificate-container"><div><p className="certificate-eyebrow">MÁS DOCUMENTACIÓN</p><h2>Consulta también el certificado {otherCode}.</h2></div><Link to={otherPath}>Ver certificado {otherCode} <FiArrowUpRight aria-hidden="true" /></Link></div></div>
    </main>
  );
}
