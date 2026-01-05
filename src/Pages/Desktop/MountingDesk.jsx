import styled from "styled-components";
import CardsMounting from "../Components/CardsMounting";
export default function MountingDesk() {
  return (
    <MainDesk>
      <ContainerFirst>
        <ImgBackground src="img/Backgrounds/OlivosFondo.png" />
        <Polygon src="img/Logos/PolygonBlue.png" />
        <ContainerTriangle>
          <TextContainer>
            <TitleTriangle>MONTAJE DE INSTALACIONES ALIMENTARIAS</TitleTriangle>
            <TextTriangle>
              En <Negrita>Grinox Industrial</Negrita> ofrecemos soluciones
              integrales en montaje industrial, adaptadas a las exigencias del
              sector alimentario.
            </TextTriangle>
          </TextContainer>
        </ContainerTriangle>
      </ContainerFirst>
      <CardsMounting />
      <AccordionWrapper>
        <AccordionRow>
          <Container>
            <ContainerText>
              <TitleGrinox>MONTAJE MECÁCNICO</TitleGrinox>
              <TextGrinox>
                Realizamos el ensamblaje y la instalación de equipos y conjuntos
                industriales con precisión y método. Cuidamos anclajes,
                soportaciones y uniones para garantizar estabilidad, durabilidad
                y facilidad de mantenimiento. Montajes pensados para trabajar,
                no solo para “quedar instalados”.
              </TextGrinox>
            </ContainerText>
            <Portada src="/img/Imgs/Deposito1.png" alt="Depósito" />
          </Container>
        </AccordionRow>
      </AccordionWrapper>
      <Container>
        <InfoSection data-fade>
          <p>
            En Grinox Industrial combinamos experiencia técnica y flexibilidad
            para desarrollar soluciones eficientes, seguras y personalizadas.Nos
            adaptamos a cada entorno de trabajo, cumpliendo con los más altos
            estándares del sector alimentarioe industrial. Cada instalación es
            pensada para maximizar el rendimiento y minimizar los tiempos de
            parada.
          </p>
        </InfoSection>
      </Container>

      <AccordionWrapper>
        <AccordionRow>
          <Container>
            <Portada src="/img/Imgs/Conexionado.png" alt="Conexionado" />
            <ContainerTextR>
              <TitleGrinox>CONEXIONADO Y VERIFICACIÓN</TitleGrinox>
              <TextGrinox>
                Realizamos conexionado industrial en acero inoxidable con
                acabados de alta calidad, pensado para entornos exigentes.
                Garantizamos seguridad, limpieza y durabilidad en cada
                unión.Comprobamos integridad, accesibilidad y seguridad antes de
                la entrega, para reducir incidencias en la puesta en marcha.
              </TextGrinox>
            </ContainerTextR>
          </Container>
        </AccordionRow>
      </AccordionWrapper>
      <AccordionWrapper>
        <AccordionRow>
          <Container>
            <InfoSection data-fade>
              Utilizamos técnicas avanzadas de soldadura y ensamblaje, cuidando
              cada detalle para asegurar un flujo óptico y sin contaminaciones.
              Nuestro equipo está especializado en instalaciones para la
              industria alimentaria, donde la presicisión y la higiene no son
              opcionales, sino esenciales.
            </InfoSection>
          </Container>
        </AccordionRow>
      </AccordionWrapper>
      <AccordionWrapper>
        <AccordionRow>
          <Container>
            <ContainerText>
              <TitleGrinox>PUESTA EN MARCHA</TitleGrinox>
              <TextGrinox>
                Realizamos pruebas, ajustes y validaciones finales para asegurar
                que el sistema funciona como debe. Acompañamos el arranque de
                forma controlada, resolviendo desviaciones y dejando el equipo
                operativo. Entrega orientada a producción: estable, verificable
                y documentada
              </TextGrinox>
            </ContainerText>
            <Portada src="/img/Imgs/Deposito1.png" alt="Depósito" />
          </Container>
        </AccordionRow>
      </AccordionWrapper>
      <AccordionWrapper>
        <AccordionRow>
          <Container>
            <Portada src="/img/Imgs/Conexionado.png" alt="Conexionado" />
            <ContainerTextR>
              <TitleGrinox>SEGURIDAD Y NORMATIVA</TitleGrinox>
              <TextGrinox>
                Trabajamos con procedimientos, señalización y control de riesgos
                en cada fase del montaje. Priorizamos la seguridad del equipo y
                el cumplimiento de requisitos en planta, manteniendo orden,
                limpieza y trazabilidad. Montajes exigentes, con criterio y
                responsabilidad.
              </TextGrinox>
            </ContainerTextR>
          </Container>
        </AccordionRow>
      </AccordionWrapper>
    </MainDesk>
  );
}
const MainDesk = styled.div`
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
  @media screen and (max-width: 723px) {
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
const Negrita = styled.b`
  color: black;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const ContainerText = styled.div.attrs(() => ({
  "data-fade-left": true,
}))`
  margin-top: 3%;
  margin-left: 5%;
  color: black;
  background-color: #ffffff;
  border-radius: 8px;
  width: 50%;
`;
const ContainerTextR = styled.div.attrs(() => ({
  "data-fade-right": true,
}))`
  margin-top: 3%;
  margin-right: 15%;
  color: black;
  background-color: #ffffff;
  border-radius: 8px;
  width: 50%;
`;
const TitleGrinox = styled.h1`
  text-align: center;
  font-weight: 600;
  color: #447aab;
  padding-top: 2%;
  padding-bottom: 2%;
`;
const TextGrinox = styled.p`
  padding-left: 5%;
  padding-right: 5%;
  text-align: center;
  margin-top: 2%;
  padding-bottom: 2%;
`;
const Portada = styled.img.attrs(() => ({
  "data-fade-right": true,
}))`
  object-fit: contain;
  width: 50%;
  height: 35rem;
  margin-top: 3%;
`;

const AccordionWrapper = styled.div`
  width: 100%;
  padding: 0 3rem;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.5rem;
`;

const AccordionRow = styled.div`
  display: flex;
  width: 100%;

  &:nth-child(odd) {
    justify-content: center;
  }

  &:nth-child(even) {
    justify-content: flex-end;
  }

  @media (max-width: 900px) {
    justify-content: center;
  }
`;
const InfoSection = styled.div`
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
  max-width: 60%;
`;
