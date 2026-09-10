import { createElement } from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiArrowRight, FiTool, FiSettings, FiLayers } from "react-icons/fi";
import "./HomeDesk.css";

const services = [
  { number: "01", icon: FiLayers, title: "Montaje industrial", text: "Instalaciones de almazaras, líneas de proceso y conexionado. Precisión en cada pieza, de principio a fin.", path: "/montaje" },
  { number: "02", icon: FiTool, title: "Mantenimiento", text: "Cuidamos tu maquinaria y tus instalaciones para que cada campaña siga adelante con confianza.", path: "/mantenimiento" },
  { number: "03", icon: FiSettings, title: "Soluciones en inoxidable", text: "Tuberías, depósitos y estructuras a medida. Fabricación adaptada a las necesidades de tu industria.", path: "/servicios" },
];

export default function HomeDesktop() {
  return (
    <main className="desktop-home">
      <section className="home-hero" aria-labelledby="home-title">
        <img className="hero-photo" src="/img/Photos/work2.jpg" alt="Maquinaria y conducciones de acero inoxidable en una almazara" fetchPriority="high" />
        <div className="hero-shade" />
        <div className="home-container hero-content">
          <p className="eyebrow"><span /> GRINOX · MONTAJE INDUSTRIAL</p>
          <h1 id="home-title">La precisión que<br />mueve tu <em>industria.</em></h1>
          <p className="hero-description">Montaje, mantenimiento y soluciones en acero inoxidable para almazaras y la industria alimentaria.</p>
          <div className="hero-actions">
            <Link className="home-button" to="/contacto">Hablemos de tu proyecto <FiArrowUpRight aria-hidden="true" /></Link>
            <a className="home-text-link" href="#servicios">Explora nuestros servicios <FiArrowRight aria-hidden="true" /></a>
          </div>
        </div>
        <div className="home-container hero-bottom"><span>DESDE BUJALANCE, CÓRDOBA · ALCANCE INTERNACIONAL</span><a href="#nosotros">Conoce Grinox <span aria-hidden="true">↓</span></a></div>
      </section>
      <section className="home-proof" aria-label="Experiencia y especialización">
        <div className="home-container proof-grid">
          <div><strong>+20 <span>años</span></strong><p>de experiencia en el sector</p></div>
          <div><strong>Acero inoxidable</strong><p>Especialistas en fabricación y montaje</p></div>
          <div><strong>Sin fronteras</strong><p>Proyectos nacionales e internacionales</p></div>
        </div>
      </section>
      <section className="home-container home-section" id="servicios">
        <div className="section-heading"><div><p className="eyebrow">01 / QUÉ HACEMOS</p><h2>Tu industria, en buenas manos.</h2></div><p>Soluciones que conectan experiencia,<br />precisión y compromiso con tu proyecto.</p></div>
        <div className="service-grid">{services.map(({ number, icon: Icon, title, text, path }) => (
          <Link className="service-card" to={path} key={number}>
            <div className="service-top">{createElement(Icon, { "aria-hidden": true })}<span>{number}</span></div>
            <h3>{title}</h3><p>{text}</p><span className="service-link">Descubre el servicio <FiArrowUpRight aria-hidden="true" /></span>
          </Link>
        ))}</div>
      </section>
      <section className="about-section" id="nosotros">
        <div className="home-container about-grid">
          <div className="about-image"><img src="/img/Backgrounds/OlivosFondo.png" alt="Olivar, el entorno del sector oleícola en el que nace Grinox" loading="lazy" /><div className="experience-note"><strong>Experiencia que se ve.</strong><span>Compromiso que se mantiene.</span></div></div>
          <div className="about-copy"><p className="eyebrow">02 / SOMOS GRINOX</p><h2>Oficio, cercanía.<br />Y mucho acero.</h2><p>Grinox nace de la experiencia de Rafael García Arroyo y de una forma de entender el trabajo: estar cerca de cada cliente y cuidar cada instalación como si fuera propia.</p><p>Más de dos décadas en el sector oleícola nos impulsan a seguir creciendo junto a almazaras y empresas de la industria alimentaria, dentro y fuera de España.</p><div className="about-values"><span>Montaje a medida</span><span>Atención directa</span><span>Visión integral</span></div><Link className="home-text-link" to="/contacto">Conversemos sobre lo que necesitas <FiArrowUpRight aria-hidden="true" /></Link></div>
        </div>
      </section>
      <section className="home-container home-section" id="trabajos">
        <div className="section-heading"><div><p className="eyebrow">03 / NUESTRO TRABAJO</p><h2>Los detalles marcan la diferencia.</h2></div><Link className="home-text-link" to="/montaje">Conoce cómo trabajamos <FiArrowUpRight aria-hidden="true" /></Link></div>
        <div className="project-grid">{[
          ["work3.jpg", "Conducciones en inoxidable", "FABRICACIÓN EN INOXIDABLE"],
          ["work5.jpg", "Depósitos y líneas de proceso", "INSTALACIONES INDUSTRIALES"],
          ["work1.jpg", "Conexionado de depósitos", "ACERO INOXIDABLE"],
        ].map(([photo, title, category]) => <figure className="project-card" key={photo}><img src={`/img/Photos/${photo}`} alt={title} loading="lazy" /><figcaption><span>{category}</span><h3>{title}</h3></figcaption></figure>)}</div>
      </section>
      <section className="home-contact"><div className="home-container contact-inner"><div><p className="eyebrow">EL SIGUIENTE PROYECTO EMPIEZA AQUÍ</p><h2>Hagamos que todo encaje.</h2><p>Cuéntanos qué necesita tu instalación. Estamos para ayudarte.</p></div><Link className="home-button" to="/contacto">Contacta con Grinox <FiArrowUpRight aria-hidden="true" /></Link></div></section>
    </main>
  );
}
