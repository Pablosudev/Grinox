import styled from "styled-components";
import SlideWorks from "../Components/SliderWorks.jsx";

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
      <SectionContainer >
        <ContainerInfo>
          <ContainerTitle>
            EXPERTOS EN MONTAJE INDUSTRIAL PARA ALMAZARAS DE ALTO RENDIMIENTO.
          </ContainerTitle>
          <TextInfo>
            En Grinox somos especialistas en la instalación y montaje de equipos
            para almazaras modernas, diseñadas para trabajar con máxima
            eficiencia, seguridad y durabilidad. Nuestro equipo cuenta con más
            de dos décadas de experiencia en líneas de procesado, tuberías en
            acero inoxidable, pasarelas, estructuras y sistemas completos de
            extracción y elaboración de aceite. Trabajamos con precisión
            industrial y ofrecemos soluciones adaptadas a cada proyecto,
            garantizando un montaje fiable, limpio y optimizado para obtener el
            máximo rendimiento en cada campaña.
          </TextInfo>
        </ContainerInfo>
        <GearContainer>
          <GearBlue src="img/Logos/BlueGear.png" alt="" />
          <GearText>
            MONTAJE
            <br />
            <span>Ver más</span>
          </GearText>
        </GearContainer>
      </SectionContainer>

      {/* SEGUNDO SECTOR */}

      <SectionContainer>
        <GearContainer>
          <GearBlue src="img/Logos/BlueGear.png" />
          <GearText>
            MANTENIMIENTO
            <br />
            <span>Ver más</span>
          </GearText>
        </GearContainer>
        <ContainerInfo>
          <ContainerTitle>MANTENIMIENTO INDUSTRIAL EN GRINOX</ContainerTitle>
          <TextInfo>
            En Grinox ofrecemos un servicio de mantenimiento industrial pensado
            para asegurar la continuidad, eficiencia y seguridad de las
            instalaciones. Realizamos intervenciones preventivas, correctivas y
            de mejora en maquinaria, líneas de procesado, estructuras y sistemas
            en acero inoxidable. Trabajamos con rapidez, precisión y materiales
            de máxima calidad para garantizar que cada equipo funcione al 100%
            durante toda la campaña, evitando paradas no previstas y prolongando
            la vida útil de la instalación.
          </TextInfo>
        </ContainerInfo>
      </SectionContainer>

      {/* TERCER SECTOR */}
      <SectionContainer>
        <ContainerInfo>
          <ContainerTitle>SERVICIOS GRINOX</ContainerTitle>
          <TextInfo>
            Nuestros servicios abarcan todo el ciclo operativo de una almazara
            moderna: desde el montaje de instalaciones completas hasta la
            fabricación a medida de componentes en inox, la instalación de
            tuberías, pasarelas, soportes y líneas de transporte. Ofrecemos
            soluciones integrales y adaptadas a cada proyecto, con un enfoque
            técnico que prioriza la eficiencia del proceso, la seguridad en la
            instalación y la calidad del acabado. Cada servicio Grinox está
            diseñado para aportar fiabilidad, rendimiento y un acabado impecable
            en cada detalle.
          </TextInfo>
        </ContainerInfo>
        <GearContainer>
          <GearBlue src="img/Logos/BlueGear.png" alt="" />
          <GearText>
            SERVICIOS
            <br />
            <span>Ver más</span>
          </GearText>
        </GearContainer>
      </SectionContainer>

      <ListContainer>
        <List>
          <ListItem>
            FABRICACIÓN DE EQUIPOS DE CONTROL DE MÁQUINAS INDUSTRIALES.
          </ListItem>
          <ListItem>
            INSTALACIÓN DE MAQUINARIA INDUSTRIAL EN PLANTAS INDUSTRIALES.
          </ListItem>
          <ListItem>
            DESMONTAJE DE MAQUINARIA Y EQUIPOS DE GRAN ESCALA.
          </ListItem>
          <ListItem>
            ACTIVIDADES DE LOS MECÁNICOS COMPROBADORES DE MAQUINARIA.
          </ListItem>
          <ListItem>INSTALACIÓN DE MAQUINARIA EN GENERAL.</ListItem>
          <ListItem>CONSTRUCCIÓN DE GRANDES DEPÓSITOS.</ListItem>
        </List>
      </ListContainer>
      <ContainerSwipper>
        <ContainerTitle>¿QUE FABRICAMOS EN GRINOX?</ContainerTitle>
        <BoxSlide>
          En la producción de Grinox contamos con el trabajo de varios tipos de
          maquinária fabricada con nuestras propias manos con las que
          conseguimos ofrecer el mejor servicio y los mejores resultados a
          nuestros clientes. <br />
          Aquí os mostramos algunos de nuestros trabajos:
        </BoxSlide>
      </ContainerSwipper>
      <SlideWorks />
    </HomeDesk>
  );
}
// 🎨 ESTILOS

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

  @media (max-width: 1024px) {
    right: 8%;
  }

  @media (max-width: 768px) {
    position: static;
    transform: none;
    text-align: center;
    color: white;
    margin: 2rem auto;
    width: 90%;
  }
`;

const TextContainer = styled.div`
  max-width: 420px;

  @media (max-width: 768px) {
    max-width: 85%;
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
`;

const ContainerTitle = styled.div.attrs(() => ({
  'data-fade': true,
}))`
  background-color: white;
  color: black;
  padding: 2%;
  border: solid 4px #447aab;
  border-radius: 8px;
  margin-top: 2%;
  font-size: 1rem;
  text-align: center;
`;

const GearContainer = styled.div.attrs(() => ({
  'data-fade': true,
}))`
  position: relative;
  display: inline-block;
  text-align: center;
`;


const GearBlue = styled.img`
  width: 40vh;
  height: auto;
  filter: drop-shadow(4px 6px 4px rgba(0, 0, 0, 0.5));
  transition: transform 0.3s ease, filter 0.3s ease;
  animation: rotateGear 20s linear infinite;

  &:hover {
    transform: scale(1.05);
    filter: drop-shadow(8px 10px 8px rgba(0, 0, 0, 0.6));
  }

  @keyframes rotateGear {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const GearText = styled.div`
  position: absolute;
  top: 50%;
  left: 52%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.4;

  span {
    font-weight: 400;
    font-size: 0.9rem;
  }
`;

const ListContainer = styled.div`
  background-color: white;
  color: black;
  border-radius: 12px;
  padding: 2rem 3rem;
  max-width: 800px;
  margin: 3rem;
  margin-bottom: 6rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  border-left: 6px solid #447aab; /* color corporativo */
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  position: relative;
  font-size: 1.1rem;
  font-weight: 500;
  margin: 1rem 0;
  line-height: 1.5;
  padding-left: 2rem;
  padding-top: 0.1rem;

  &::before {
    content: "⚙️";
    position: absolute;
    left: 0;
    top: 0;
    color: #447aab;
    font-size: 1.3rem;
  }

  &:hover {
    color: #447aab;
    transform: translateX(5px);
    transition: all 0.2s ease;
  }
`;
const ContainerSwipper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 25%;
  padding-right: 25%;
  text-align: center;
`;
const BoxSlide = styled.div`
  border-radius: 8px;
  background-color: #ffffff;
  color: black;
  margin-top: 3%;
  padding: 3% 10%;
`;
const ContainerInfo = styled.div.attrs(() => ({
  'data-fade': true,
}))`
  border-radius: 8px;
  padding: 1%;
  background-color: #ffffff;
  width: 50%;
`;

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 5%;
`;
const TextInfo = styled.p`
  color: black;
  margin-top: 2%;
  margin-left: 2%;
  margin-right: 2%;
  font-size: 1rem;
`;
