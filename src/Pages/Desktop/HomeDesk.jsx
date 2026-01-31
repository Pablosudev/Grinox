import styled from "styled-components";
import SlideWorks from "../Components/SliderWorks.jsx";
import Cards from "../Components/Cards.jsx";
import WorkGallery from "../Components/WorkGallery.jsx";
import Accordion from "../Components/Accordion.jsx";
export default function HomeDesktop() {
  return (
    <HomeDesk>
      <ContainerFirst>
        <ImgBackground src="img/Backgrounds/OlivosFondo.png" />
        <Polygon src="img/Logos/PolygonBlue.png" />
        <ContainerTriangle>
          <TextContainer>
            <TitleTriangle>¿QUIÉNES SOMOS?</TitleTriangle>
            <TextTriangle>
              Nuestra empresa, Grinox Montaje Industrial SL, <br />
              nace de la inquietud emprendedora de un <br />
              trabajador de la industria calderera con más de 20 años de
              experiencia en el montaje de <br />
              instalaciones de almazaras tanto nacionales <br />
              como internacionales.
            </TextTriangle>
          </TextContainer>
        </ContainerTriangle>
      </ContainerFirst>

      {/* PRIMER SECTOR */}
      <AccordionWrapper>
        <AccordionRow>
          <Accordion title="EXPERTOS EN MONTAJE INDUSTRIAL PARA ALMAZARAS DE ALTO RENDIMIENTO.">
            En Grinox somos especialistas en la instalación y montaje de equipos
            para almazaras modernas, diseñadas para trabajar con máxima
            eficiencia, seguridad y durabilidad. Nuestro equipo cuenta con más
            de dos décadas de experiencia en líneas de procesado, tuberías en
            acero inoxidable, pasarelas, estructuras y sistemas completos de
            extracción y elaboración de aceite. Trabajamos con precisión
            industrial y ofrecemos soluciones adaptadas a cada proyecto,
            garantizando un montaje fiable, limpio y optimizado para obtener el
            máximo rendimiento en cada campaña.
          </Accordion>
        </AccordionRow>
        
        <AccordionRow>
          <Accordion title="MANTENIMIENTO INDUSTRIAL EN GRINOX">
            En Grinox ofrecemos un servicio de mantenimiento industrial pensado
            para asegurar la continuidad, eficiencia y seguridad de las
            instalaciones. Realizamos intervenciones preventivas, correctivas y
            de mejora en maquinaria, líneas de procesado, estructuras y sistemas
            en acero inoxidable. Trabajamos con rapidez, precisión y materiales
            de máxima calidad para garantizar que cada equipo funcione al 100%
            durante toda la campaña, evitando paradas no previstas y prolongando
            la vida útil de la instalación.
          </Accordion>
        </AccordionRow>
        {/* TERCER SECTOR */}
        <AccordionRow>
          <Accordion title="SERVICIOS GRINOX">
            Nuestros servicios abarcan todo el ciclo operativo de una almazara
            moderna: desde el montaje de instalaciones completas hasta la
            fabricación a medida de componentes en inox, la instalación de
            tuberías, pasarelas, soportes y líneas de transporte. Ofrecemos
            soluciones integrales y adaptadas a cada proyecto, con un enfoque
            técnico que prioriza la eficiencia del proceso, la seguridad en la
            instalación y la calidad del acabado. Cada servicio Grinox está
            diseñado para aportar fiabilidad, rendimiento y un acabado impecable
            en cada detalle.
          </Accordion>
        </AccordionRow>
        
      </AccordionWrapper>
      {/* TARJETAS */}
      <Cards />
      <HistorySection data-fade>
        <h2>UN POCO MÁS SOBRE NOSOTROS</h2>
        <p>
          La empresa nace con el nombre de Rafael García Arroyo como trabajador
          autónomo y posteriormente pasa a ser una sociedad limitada con el
          espíritu de dar servicio al sector oleícola, como principal actividad
          y otros sectores del sector alimentario. Nuestros trabajos dentro del
          sector oleícola engloban las instalaciones de acero inoxidable,
          montaje y mantenimiento de maquinaria y su conexionado a los
          diferentes elementos de las fabricas de aceites. Somo una empresa
          joven con la ilusión de ampliar nuestro horizonte de trabajo a otros
          sectores como el vitivinícola, producción industrial de bebidas y a
          todos los sectores industriales que precisen del mantenimiento de
          instalaciones con conducciones medianet tubos de acero inoxidable.
        </p>
      </HistorySection>

      {/* GALERIA */}
      <WorkGallery />
    
    </HomeDesk>
  );
}

const HomeDesk = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url("/img/Backgrounds/fondoGear.png");
  background-repeat: repeat;
  background-size: auto;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  z-index: 0;
  padding-bottom: 5%;
   @media screen and (max-width: 723px){
    display: none;
  }
`;
const ContainerFirst = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;
  overflow: hidden;
`;

const ImgBackground = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const Polygon = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 90%;
`;

const ContainerTriangle = styled.div`
  position: absolute;
  top: 50%;
  right: 12%;
  transform: translateY(-50%);
  z-index: 2;
  text-align: right;
  color: white;

  @media (max-width: 1200px) {
    right: -3%;
    
  }
  @media (max-width: 953px) {
    right: -6%;
    
  }
   @media (max-width: 843px) {
    right: -10%;
  }
    @media (max-width: 725px) {
    right: -13%;
  }

 
`;

const TextContainer = styled.div`
  max-width: 420px;

  @media (max-width: 1200px) {
    max-width: 65%;
    margin: 0 auto;
  }
  
 
`;

const TitleTriangle = styled.div`
  font-weight: 600;
  font-size: 1.7rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const TextTriangle = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;
  text-align: center;

  /* @media (max-width: 1200px){
    font-size: 1rem;
  } */
   @media (max-width: 1200px) {
    font-size:1rem;
    
  }
  @media (max-width: 953px) {
   font-size: 0.9rem; 
  }
   @media (max-width: 745px) {
    
  }
`;

const HistorySection = styled.div`
  margin-top: 5rem;
  padding-left: 2%;
  padding-right: 2%;
  margin-right: 2%;
  margin-left: 2%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  border-radius: 12px;
  color: white;
  text-align: center;
  line-height: 1.8;
`;
const AccordionWrapper = styled.div`
  width: 100%;
  padding: 0 3rem; /* deja espacio respirable */
  margin: 4rem 0;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const AccordionRow = styled.div`
  display: flex;
  width: 100%;

  &:nth-child(odd) {
    justify-content: flex-start; /* IZQUIERDA */
  }

  &:nth-child(even) {
    justify-content: flex-end; /* DERECHA */
  }

  @media (max-width: 900px) {
    justify-content: center;
  }
`;
