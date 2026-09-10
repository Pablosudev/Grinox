import { Link } from "react-router-dom";
import { FiArrowDown, FiArrowUpRight, FiCalendar, FiCheck, FiPhone, FiTool } from "react-icons/fi";
import "./MaintenanceDesk.css";

export default function MaintenanceDesktop() {
  return (
    <main className="desktop-maintenance">
      <section className="maintenance-hero" aria-labelledby="maintenance-title">
        <div className="maintenance-container maintenance-hero-grid">
          <div>
            <nav className="maintenance-breadcrumb" aria-label="Ruta de navegación"><Link to="/">Inicio</Link><span aria-hidden="true">/</span><span aria-current="page">Mantenimiento</span></nav>
            <p className="maintenance-eyebrow">MANTENIMIENTO INDUSTRIAL GRINOX</p>
            <h1 id="maintenance-title">Cuidamos lo que<br /><em>mueve tu industria.</em></h1>
            <p className="maintenance-lead">Mantenimiento para almazaras e instalaciones alimentarias. Revisamos, intervenimos y te acompañamos para cuidar tus equipos campaña tras campaña.</p>
            <div className="maintenance-actions"><Link className="maintenance-button" to="/contacto">Consulta tu mantenimiento <FiArrowUpRight aria-hidden="true" /></Link><a className="maintenance-link" href="#tipos-mantenimiento">Conoce los servicios <FiArrowDown aria-hidden="true" /></a></div>
          </div>
          <figure className="maintenance-hero-photo"><img src="/img/Imgs/Maquina.png" alt="Detalle de un equipo industrial con bomba, conducciones y mangueras" fetchPriority="high" /><figcaption><FiTool aria-hidden="true" /><div><strong>Atención a cada equipo.</strong><span>Una visión completa de tu instalación.</span></div></figcaption></figure>
        </div>
      </section>

      <section className="maintenance-container maintenance-section" id="tipos-mantenimiento" aria-labelledby="maintenance-services-title">
        <div className="maintenance-heading"><div><p className="maintenance-eyebrow">01 / CÓMO PODEMOS AYUDARTE</p><h2 id="maintenance-services-title">Cada necesidad, su intervención.</h2></div><p>Desde una revisión programada<br />hasta una parada de producción.</p></div>
        <div className="maintenance-card-grid">
          <article className="maintenance-card"><div className="maintenance-card-top"><FiCalendar aria-hidden="true" /><span>01 / PREVENIR</span></div><h3>Mantenimiento preventivo</h3><p>Revisiones programadas para detectar desgaste y anticiparse a fallos que puedan afectar a la producción.</p><ul><li>Revisión de equipos e instalaciones</li><li>Detección de puntos que necesitan atención</li><li>Planificación de las intervenciones</li></ul><Link className="maintenance-card-action" to="/contacto">Planificar una revisión <FiArrowUpRight aria-hidden="true" /></Link></article>
          <article className="maintenance-card"><div className="maintenance-card-top"><FiTool aria-hidden="true" /><span>02 / RESOLVER</span></div><h3>Mantenimiento correctivo</h3><p>Intervenciones sobre averías y problemas de funcionamiento para recuperar la operatividad del equipo.</p><ul><li>Valoración de la incidencia</li><li>Intervención y ajustes necesarios</li><li>Comprobación del funcionamiento</li></ul><Link className="maintenance-card-action" to="/contacto">Consultar una intervención <FiArrowUpRight aria-hidden="true" /></Link></article>
          <article className="maintenance-card maintenance-card-urgent"><div className="maintenance-card-top"><FiPhone aria-hidden="true" /><span>03 / ATENDER</span></div><h3>Asistencia urgente</h3><p>Si un fallo crítico interrumpe tu actividad, contacta directamente con nosotros para valorar la incidencia.</p><ul><li>Contacto telefónico directo</li><li>Información sobre el equipo afectado</li><li>Valoración de la intervención necesaria</li></ul><a className="maintenance-card-action" href="#asistencia">Ver teléfonos de contacto <FiArrowDown aria-hidden="true" /></a></article>
        </div>
      </section>

      <section className="maintenance-tinted maintenance-section" aria-labelledby="maintenance-experience-title">
        <div className="maintenance-container maintenance-experience-grid">
          <div className="maintenance-team"><img src="/img/Photos/Trabajador2.png" alt="Técnico de Grinox trabajando en un equipo industrial" loading="lazy" /><div><span>A PIE DE INSTALACIÓN</span><strong>Oficio y atención directa.</strong></div></div>
          <div className="maintenance-experience-copy"><p className="maintenance-eyebrow">02 / EXPERIENCIA QUE ACOMPAÑA</p><h2 id="maintenance-experience-title">Conocemos tu sector.<br />Cuidamos tu instalación.</h2><p>En Grinox combinamos experiencia técnica y cercanía para atender las necesidades de la industria alimentaria. Estudiamos cada intervención teniendo en cuenta el equipo, el entorno de trabajo y la actividad de la planta.</p><p>Prestamos atención al estado de la maquinaria, las conducciones y los elementos de la instalación, con el orden y la limpieza que requieren estos entornos.</p><ul className="maintenance-checklist"><li><FiCheck aria-hidden="true" />Maquinaria y equipos de proceso</li><li><FiCheck aria-hidden="true" />Conducciones y conexiones en inoxidable</li><li><FiCheck aria-hidden="true" />Elementos mecánicos de la instalación</li></ul><Link className="maintenance-link" to="/montaje">¿Necesitas montar o ampliar tu instalación? <FiArrowUpRight aria-hidden="true" /></Link></div>
        </div>
      </section>

      <section className="maintenance-container maintenance-section" aria-labelledby="maintenance-process-title">
        <div className="maintenance-heading"><div><p className="maintenance-eyebrow">03 / CERCA DE TI, EN CADA PASO</p><h2 id="maintenance-process-title">Empezamos por escucharte.</h2></div><p>Conocer el problema es el primer paso<br />para preparar la intervención.</p></div>
        <ol className="maintenance-process"><li><span>01</span><h3>Cuéntanos qué ocurre</h3><p>Indícanos el equipo afectado, lo que has observado y cómo está influyendo en la actividad.</p></li><li><span>02</span><h3>Valoramos contigo</h3><p>Revisamos las necesidades del trabajo y concretamos los siguientes pasos de la intervención.</p></li><li><span>03</span><h3>Intervenimos y revisamos</h3><p>Realizamos los trabajos acordados y comprobamos el funcionamiento del equipo intervenido.</p></li></ol>
      </section>

      <section className="maintenance-assistance" id="asistencia" aria-labelledby="maintenance-assistance-title"><div className="maintenance-container maintenance-assistance-grid"><div><p className="maintenance-eyebrow">CONTACTO DIRECTO CON GRINOX</p><h2 id="maintenance-assistance-title">¿Una incidencia en tu instalación?</h2><p>Llámanos y cuéntanos qué está ocurriendo. Ten a mano el tipo de equipo y la ubicación de la planta para ayudarnos a valorar tu caso.</p></div><div className="maintenance-phones"><a href="tel:+34678574652"><FiPhone aria-hidden="true" /><span>678 574 652</span><FiArrowUpRight aria-hidden="true" /></a><a href="tel:+34662543947"><FiPhone aria-hidden="true" /><span>662 543 947</span><FiArrowUpRight aria-hidden="true" /></a></div></div></section>

      <section className="maintenance-contact"><div className="maintenance-container maintenance-contact-inner"><div><p className="maintenance-eyebrow">PREPARA LA PRÓXIMA CAMPAÑA</p><h2>El cuidado de hoy cuenta mañana.</h2><p>Hablemos de las revisiones y mejoras que necesita tu instalación.</p></div><Link className="maintenance-button" to="/contacto">Hablemos de mantenimiento <FiArrowUpRight aria-hidden="true" /></Link></div></section>
    </main>
  );
}
