import { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiCheckCircle, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import "./ContactDesk.css";

const emptyForm = { name: "", company: "", email: "", phone: "", message: "" };

export default function ContactDesk() {
  const [form, setForm] = useState(emptyForm);
  const [website, setWebsite] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (website || loading) return;

    const payload = Object.fromEntries(Object.entries(form).map(([key, value]) => [key, value.trim()]));
    if (Object.values(payload).some((value) => !value)) {
      setResponse({ type: "error", message: "Completa todos los campos antes de enviar tu consulta." });
      return;
    }

    setLoading(true);
    setResponse(null);
    try {
      const result = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await result.json();
      if (result.ok) {
        setResponse({ type: "success", message: "Mensaje enviado. Gracias por contactar con Grinox; nos pondremos en contacto contigo." });
        setForm(emptyForm);
        setWebsite("");
      } else {
        setResponse({ type: "error", message: data.message || "No se pudo enviar el mensaje. Inténtalo de nuevo o llámanos." });
      }
    } catch {
      setResponse({ type: "error", message: "No se pudo enviar el mensaje. Tus datos siguen en el formulario; puedes intentarlo de nuevo o contactar por teléfono." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="desktop-contact">
      <section className="contact-intro" aria-labelledby="contact-title">
        <div className="contact-container">
          <nav className="contact-breadcrumb" aria-label="Ruta de navegación"><Link to="/">Inicio</Link><span aria-hidden="true">/</span><span aria-current="page">Contacto</span></nav>
          <div className="contact-intro-grid"><div><p className="contact-eyebrow">HABLEMOS DE TU PROYECTO</p><h1 id="contact-title">El siguiente paso<br />lo damos <em>contigo.</em></h1></div><p>Un nuevo montaje, una mejora o el mantenimiento de tu instalación. Cuéntanos qué necesitas y veamos cómo podemos ayudarte.</p></div>
        </div>
      </section>

      <div className="contact-container contact-main-grid">
        <aside className="contact-details" aria-labelledby="contact-details-title">
          <p className="contact-eyebrow">CERCA DE TI</p><h2 id="contact-details-title">Contacto directo.<br />Trato personal.</h2><p className="contact-details-intro">Elige la forma de contactar que mejor te venga. Estamos al otro lado.</p>
          <div className="contact-detail"><FiPhone aria-hidden="true" /><div><h3>Llámanos</h3><a href="tel:+34678574652">678 574 652</a><a href="tel:+34662543947">662 543 947</a></div></div>
          <div className="contact-detail"><FiMail aria-hidden="true" /><div><h3>Escríbenos</h3><a className="contact-email" href="mailto:grinoxindustrial@gmail.com">grinoxindustrial@gmail.com</a></div></div>
          <div className="contact-detail"><FiMapPin aria-hidden="true" /><div><h3>Dónde estamos</h3><address>Polígono la Fuenblanquilla,<br />parcela 5-3-1<br />14650 Bujalance (Córdoba)</address><a className="contact-directions" href="https://www.google.com/maps/search/?api=1&query=Pol%C3%ADgono%20la%20Fuenblanquilla%20parcela%205-3-1%2014650%20Bujalance%20C%C3%B3rdoba" target="_blank" rel="noopener noreferrer" aria-label="Ver ubicación en Google Maps (se abre en otra pestaña)">Ver ubicación <FiArrowUpRight aria-hidden="true" /></a></div></div>
          <div className="contact-incident"><FiPhone aria-hidden="true" /><div><h3>¿Una incidencia en planta?</h3><p>Para explicarnos una avería o parada de producción, contacta directamente por teléfono.</p><a href="tel:+34678574652">Llamar a Grinox <FiArrowUpRight aria-hidden="true" /></a></div></div>
        </aside>

        <section className="contact-form-card" aria-labelledby="contact-form-title">
          <p className="contact-eyebrow">CUÉNTANOS QUÉ NECESITAS</p><h2 id="contact-form-title">Todo empieza con un mensaje.</h2><p className="contact-form-intro">Déjanos tus datos y una breve descripción de tu consulta.</p>
          <form className="contact-form" onSubmit={handleSubmit} aria-busy={loading}>
            <p className="contact-required" id="contact-required">Todos los campos son obligatorios.</p>
            <div className="contact-honeypot" aria-hidden="true"><label htmlFor="contact-desktop-website">Website</label><input id="contact-desktop-website" name="website" type="text" value={website} onChange={(event) => setWebsite(event.target.value)} tabIndex={-1} autoComplete="off" /></div>
            <fieldset disabled={loading} aria-describedby="contact-required">
              <legend className="contact-sr-only">Datos de contacto y consulta</legend>
              <div className="contact-form-row"><div className="contact-field"><label htmlFor="contact-desktop-name">Nombre y apellidos</label><input id="contact-desktop-name" name="name" autoComplete="name" placeholder="Tu nombre completo" required value={form.name} onChange={updateField} /></div><div className="contact-field"><label htmlFor="contact-desktop-company">Empresa</label><input id="contact-desktop-company" name="company" autoComplete="organization" placeholder="Nombre de tu empresa" required value={form.company} onChange={updateField} /></div></div>
              <div className="contact-form-row"><div className="contact-field"><label htmlFor="contact-desktop-email">Correo electrónico</label><input id="contact-desktop-email" name="email" type="email" autoComplete="email" placeholder="nombre@empresa.com" required value={form.email} onChange={updateField} /></div><div className="contact-field"><label htmlFor="contact-desktop-phone">Teléfono</label><input id="contact-desktop-phone" name="phone" type="tel" autoComplete="tel" placeholder="+34 600 000 000" required value={form.phone} onChange={updateField} /></div></div>
              <div className="contact-field"><label htmlFor="contact-desktop-message">¿En qué podemos ayudarte?</label><textarea id="contact-desktop-message" name="message" rows={6} placeholder="Cuéntanos qué necesita tu instalación, dónde está y cualquier detalle que nos ayude a conocer tu proyecto…" required value={form.message} onChange={updateField} /></div>
              <div className="contact-form-footer"><p>Usaremos tus datos para responder a tu consulta.</p><button type="submit" className="contact-submit" disabled={loading}>{loading ? "Enviando mensaje…" : "Enviar mensaje"}<FiArrowUpRight aria-hidden="true" /></button></div>
            </fieldset>
            <div className="contact-feedback" aria-live="polite" aria-atomic="true">{response && <p className={`contact-response contact-response-${response.type}`}>{response.type === "success" && <FiCheckCircle aria-hidden="true" />}{response.message}</p>}</div>
          </form>
        </section>
      </div>

      <section className="contact-reach"><div className="contact-container contact-reach-inner"><div><p className="contact-eyebrow">DESDE CÓRDOBA, DONDE NOS NECESITES</p><h2>Una base local.<br />Un alcance internacional.</h2></div><p>Trabajamos en instalaciones nacionales e internacionales, acompañando a almazaras y empresas de la industria alimentaria en sus proyectos de montaje y mantenimiento.</p></div></section>
    </main>
  );
}
