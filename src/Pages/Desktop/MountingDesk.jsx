import { Link } from "react-router-dom";
import { FiArrowDown, FiArrowUpRight, FiCheck, FiShield, FiTool } from "react-icons/fi";
import "./MountingDesk.css";

const areas = [
  { id: "montaje-mecanico", number: "01", title: "Montaje mecánico", text: "Ensamblaje, anclajes y ajuste de equipos industriales." },
  { id: "conexionado", number: "02", title: "Conexionado y verificación", text: "Uniones en inoxidable y revisión de puntos críticos." },
  { id: "puesta-en-marcha", number: "03", title: "Puesta en marcha", text: "Pruebas y ajustes para un arranque controlado." },
  { id: "seguridad", number: "04", title: "Seguridad en planta", text: "Orden, señalización y control en cada intervención." },
];

export default function MountingDesk() {
  return (
    <main className="desktop-mounting">
      <section className="mounting-hero" aria-labelledby="mounting-title">
        <img className="mounting-hero-photo" src="/img/Photos/work6.jpg" alt="Vista de una instalación industrial con depósitos, maquinaria y pasarelas" fetchPriority="high" />
        <div className="mounting-container mounting-hero-content">
          <nav className="mounting-breadcrumb" aria-label="Ruta de navegación"><Link to="/">Inicio</Link><span aria-hidden="true">/</span><span aria-current="page">Montaje</span></nav>
          <p className="mounting-eyebrow">MONTAJE INDUSTRIAL GRINOX</p>
          <h1 id="mounting-title">Cada pieza en su sitio.<br /><em>Tu instalación en marcha.</em></h1>
          <p className="mounting-lead">Montaje de instalaciones para almazaras y la industria alimentaria. Conectamos experiencia, precisión y atención a cada detalle de tu proyecto.</p>
          <div className="mounting-actions"><Link className="mounting-button" to="/contacto">Hablemos de tu instalación <FiArrowUpRight aria-hidden="true" /></Link><a className="mounting-link" href="#como-trabajamos">Así trabajamos <FiArrowDown aria-hidden="true" /></a></div>
          <div className="mounting-hero-note"><span>MONTAJE · CONEXIONADO · PUESTA EN MARCHA</span><span>BUJALANCE, CÓRDOBA / ALCANCE INTERNACIONAL</span></div>
        </div>
      </section>

      <section className="mounting-container mounting-section" id="como-trabajamos" aria-labelledby="mounting-overview-title">
        <div className="mounting-heading"><div><p className="mounting-eyebrow">UN MONTAJE CON VISIÓN DE CONJUNTO</p><h2 id="mounting-overview-title">Del primer anclaje al arranque.</h2></div><p>Cuidamos cada fase para que los equipos<br />trabajen como una sola instalación.</p></div>
        <div className="mounting-area-grid">{areas.map((area) => <a className="mounting-area" href={`#${area.id}`} key={area.id}><span className="mounting-area-number">{area.number}</span><h3>{area.title}</h3><p>{area.text}</p><span className="mounting-area-link">Ver más <FiArrowDown aria-hidden="true" /></span></a>)}</div>
      </section>

      <section className="mounting-tinted mounting-section" id="montaje-mecanico" aria-labelledby="mechanical-title">
        <div className="mounting-container mounting-detail-grid">
          <figure className="mounting-detail-photo mounting-equipment-photo"><img src="/img/Imgs/Deposito1.png" alt="Imagen de dos depósitos de acero inoxidable con soportes y conexiones" loading="lazy" /><figcaption>Depósitos y soportaciones: cada elemento forma parte del conjunto.</figcaption></figure>
          <div className="mounting-detail-copy"><p className="mounting-eyebrow">01 / MONTAJE MECÁNICO</p><h2 id="mechanical-title">Una base sólida.<br />Un conjunto que encaja.</h2><p>Ensamblamos e instalamos equipos industriales adaptándonos al espacio y a las necesidades de cada planta. Cuidamos los anclajes, las soportaciones y las uniones desde el principio.</p><p>El objetivo es una instalación estable, accesible y pensada también para facilitar el mantenimiento de mañana.</p><ul className="mounting-checklist"><li><FiCheck aria-hidden="true" />Ensamblaje y ajuste de conjuntos industriales</li><li><FiCheck aria-hidden="true" />Anclajes, soportes y uniones</li><li><FiCheck aria-hidden="true" />Integración de maquinaria en planta</li></ul><Link className="mounting-link" to="/servicios">Explorar equipos y soluciones <FiArrowUpRight aria-hidden="true" /></Link></div>
        </div>
      </section>

      <section className="mounting-container mounting-section mounting-detail-grid" id="conexionado" aria-labelledby="connections-title">
        <div className="mounting-detail-copy"><p className="mounting-eyebrow">02 / CONEXIONADO Y VERIFICACIÓN</p><h2 id="connections-title">La calidad también está<br />en cada unión.</h2><p>Realizamos conexionado industrial en acero inoxidable para entornos alimentarios, prestando atención al acabado, la limpieza y la accesibilidad de cada conducción.</p><p>Antes de la entrega revisamos la integridad de las conexiones y los puntos críticos del conjunto para reducir incidencias durante la puesta en marcha.</p><ul className="mounting-checklist"><li><FiCheck aria-hidden="true" />Conducciones y uniones en acero inoxidable</li><li><FiCheck aria-hidden="true" />Soldadura y ensamblaje cuidados</li><li><FiCheck aria-hidden="true" />Revisión de conexiones y accesibilidad</li></ul></div>
        <figure className="mounting-detail-photo mounting-pipe-photo"><img src="/img/Imgs/Conexionado.png" alt="Ilustración de un conjunto de tuberías, bridas y válvulas en acero inoxidable" loading="lazy" /><figcaption>Detalle ilustrativo de conducciones y uniones en inoxidable.</figcaption></figure>
      </section>

      <section className="mounting-tinted mounting-section" id="puesta-en-marcha" aria-labelledby="startup-title">
        <div className="mounting-container mounting-startup-grid">
          <div><p className="mounting-eyebrow">03 / PUESTA EN MARCHA</p><h2 id="startup-title">Estamos también<br />en el primer arranque.</h2><p className="mounting-startup-intro">Acompañamos la puesta en marcha con pruebas y ajustes. Revisamos el funcionamiento del conjunto y resolvemos las desviaciones que aparezcan durante el arranque.</p><ol className="mounting-steps"><li><span>01</span><div><h3>Comprobamos</h3><p>Pruebas y revisión funcional antes del arranque.</p></div></li><li><span>02</span><div><h3>Ajustamos</h3><p>Ajustes del equipo y resolución de desviaciones.</p></div></li><li><span>03</span><div><h3>Acompañamos</h3><p>Arranque controlado y validaciones finales.</p></div></li></ol></div>
          <div className="mounting-team"><img src="/img/Imgs/Trabajador.png" alt="Trabajador de Grinox interviniendo en un equipo de la instalación" loading="lazy" /><div><FiTool aria-hidden="true" /><h3>Personas detrás de cada montaje.</h3><p>Experiencia técnica y atención directa, a pie de instalación.</p></div></div>
        </div>
      </section>

      <section className="mounting-safety" id="seguridad" aria-labelledby="safety-title"><div className="mounting-container mounting-safety-grid"><div><FiShield className="mounting-safety-icon" aria-hidden="true" /><p className="mounting-eyebrow">04 / SEGURIDAD Y NORMATIVA</p><h2 id="safety-title">Trabajar bien empieza<br />por trabajar con cuidado.</h2></div><div><p>Integramos los procedimientos de trabajo, la señalización y el control de riesgos en cada fase del montaje. Nos adaptamos a los requisitos de la planta, manteniendo el orden y la limpieza durante la intervención.</p><div className="mounting-safety-values"><span>Procedimientos en planta</span><span>Orden y señalización</span><span>Control de riesgos</span></div></div></div></section>

      <section className="mounting-contact"><div className="mounting-container mounting-contact-inner"><div><p className="mounting-eyebrow">HABLEMOS DEL SIGUIENTE PASO</p><h2>Hagamos que tu proyecto encaje.</h2><p>Cuéntanos qué necesitas montar, ampliar o conectar en tu instalación.</p></div><Link className="mounting-button" to="/contacto">Contacta con Grinox <FiArrowUpRight aria-hidden="true" /></Link></div></section>
    </main>
  );
}
