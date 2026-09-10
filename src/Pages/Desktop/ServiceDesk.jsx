import { Link } from "react-router-dom";
import { FiArrowRight, FiArrowUpRight, FiLayers, FiSettings, FiTool } from "react-icons/fi";
import maquinas from "../../jsonCards.json";
import products from "../../product.json";
import "./ServiceDesk.css";

const fabricationCopy = {
  1: { title: "Carro para transporte de sustancias químicas", text: "Un carro diseñado para facilitar el transporte y la manipulación de los productos químicos utilizados en la instalación." },
  2: { title: "Equipo de limpieza GR-200", text: "Limpieza profesional de depósitos con un equipo fabricado para adaptarse a sus dimensiones y a las necesidades de cada cliente." },
  3: { title: "Equipo de centrífugas", text: "Equipo diseñado para integrarse en la línea de proceso de una almazara y facilitar la separación de las distintas fases durante la elaboración del aceite. Adaptamos su configuración, montaje y conexionado a las necesidades de cada instalación." },
};

function sentenceCase(text) {
  return text.charAt(0) + text.slice(1).toLocaleLowerCase("es");
}

export default function ServiceDesk() {
  return (
    <main className="desktop-services">
      <section className="services-hero" aria-labelledby="services-title">
        <div className="services-container services-hero-grid">
          <div className="services-hero-copy">
            <nav className="services-breadcrumb" aria-label="Ruta de navegación"><Link to="/">Inicio</Link><span aria-hidden="true">/</span><span aria-current="page">Servicios</span></nav>
            <p className="services-eyebrow">SOLUCIONES GRINOX</p>
            <h1 id="services-title">Cada instalación.<br />Una solución <em>a medida.</em></h1>
            <p className="services-lead">Fabricamos, instalamos y mantenemos los equipos que hacen avanzar tu industria. Desde una pieza en inoxidable hasta el conjunto de tu almazara.</p>
            <div className="services-actions"><Link className="services-button" to="/contacto">Cuéntanos tu proyecto <FiArrowUpRight aria-hidden="true" /></Link><a className="services-link" href="#fabricacion">Ver nuestras fabricaciones <FiArrowRight aria-hidden="true" /></a></div>
          </div>
          <figure className="services-hero-image"><img src="/img/Photos/work4.jpg" alt="Soldadura de una conducción de acero inoxidable en el taller de la instalación" fetchPriority="high" /><figcaption><span>EL VALOR ESTÁ EN LOS DETALLES</span>Acero inoxidable. Oficio. Precisión.</figcaption></figure>
        </div>
      </section>

      <section className="services-container services-section" aria-labelledby="services-overview-title">
        <div className="services-heading"><div><p className="services-eyebrow">01 / UN SERVICIO INTEGRAL</p><h2 id="services-overview-title">Contigo en cada parte del proceso.</h2></div><p>Un equipo cercano para conectar<br />las necesidades de tu instalación.</p></div>
        <div className="services-overview">
          <a className="services-overview-card" href="#fabricacion"><div className="services-card-top"><FiLayers aria-hidden="true" /><span>01</span></div><h3>Fabricación</h3><p>Equipos y soluciones en acero inoxidable adaptados a tu forma de trabajar.</p><span className="services-card-action">Explorar fabricaciones <FiArrowRight aria-hidden="true" /></span></a>
          <Link className="services-overview-card" to="/montaje"><div className="services-card-top"><FiSettings aria-hidden="true" /><span>02</span></div><h3>Instalación y montaje</h3><p>Maquinaria, tuberías y conexionado para integrar cada elemento de tu planta.</p><span className="services-card-action">Conocer el montaje <FiArrowUpRight aria-hidden="true" /></span></Link>
          <Link className="services-overview-card" to="/mantenimiento"><div className="services-card-top"><FiTool aria-hidden="true" /><span>03</span></div><h3>Mantenimiento</h3><p>Atención a tus equipos e instalaciones para acompañarte campaña tras campaña.</p><span className="services-card-action">Ver mantenimiento <FiArrowUpRight aria-hidden="true" /></span></Link>
        </div>
      </section>

      <section className="services-fabrication services-section" id="fabricacion" aria-labelledby="fabrication-title">
        <div className="services-container">
          <div className="services-heading"><div><p className="services-eyebrow">02 / NUESTRAS FABRICACIONES</p><h2 id="fabrication-title">Del taller a tu instalación.</h2></div><p>Equipos propios para resolver<br />necesidades concretas de tu día a día.</p></div>
          <div className="services-product-grid">{products.map((product) => {
            const copy = fabricationCopy[product.id] ?? { title: sentenceCase(product.name), text: product.data };
            return <article className="services-product" key={product.id}>
              <div className="services-product-image"><span>FABRICACIÓN GRINOX</span><img src={product.imagen} alt={copy.title} loading="lazy" /></div>
              <div className="services-product-copy"><h3>{copy.title}</h3><p>{copy.text}</p><Link className="services-card-action" to="/contacto" aria-label={`Consultar sobre ${copy.title}`}>Consultar este equipo <FiArrowUpRight aria-hidden="true" /></Link></div>
            </article>;
          })}</div>
        </div>
      </section>

      <section className="services-container services-section" id="maquinaria" aria-labelledby="machinery-title">
        <div className="services-heading"><div><p className="services-eyebrow">03 / MAQUINARIA PARA ALMAZARAS</p><h2 id="machinery-title">Cada equipo tiene su lugar.</h2></div><p>Hablemos de la maquinaria que necesitas<br />y de cómo integrarla en tu instalación.</p></div>
        <div className="services-machinery-grid">{maquinas.map((machine) => <article className="services-machine" key={machine.id}><div className="services-machine-image"><img src={machine.imagen} alt={sentenceCase(machine.name)} loading="lazy" /></div><div className="services-machine-copy"><span className="services-eyebrow">MAQUINARIA INDUSTRIAL</span><h3>{sentenceCase(machine.name)}</h3><Link className="services-link" to="/contacto" aria-label={`Solicitar información sobre ${sentenceCase(machine.name)}`}>Solicitar información <FiArrowUpRight aria-hidden="true" /></Link></div></article>)}</div>
        <aside className="services-advice"><FiTool aria-hidden="true" /><p><strong>¿Tu instalación necesita algo diferente?</strong> Cuéntanos qué equipo o solución buscas. Estudiamos las necesidades de cada proyecto de forma individual.</p><Link className="services-link" to="/contacto">Hablemos <FiArrowUpRight aria-hidden="true" /></Link></aside>
      </section>

      <section className="services-contact" aria-labelledby="services-contact-title"><div className="services-container services-contact-inner"><div><p className="services-eyebrow">EMPECEMOS POR LO QUE NECESITAS</p><h2 id="services-contact-title">Tu próximo proyecto empieza<br />con una conversación.</h2><p>Estamos en Bujalance, Córdoba. Trabajamos contigo donde nos necesites.</p></div><Link className="services-button" to="/contacto">Contacta con Grinox <FiArrowUpRight aria-hidden="true" /></Link></div></section>
    </main>
  );
}
