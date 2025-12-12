import styled from "styled-components";

export default function MountingDesk() {
  return (
    <MainDesk>
      <ContainerFirst>
        <ImgBackground src="img/Backgrounds/OlivosFondo.png" />
        <Polygon src="img/Logos/PolygonBlue.png" />
        <ContainerTriangle>
          <TextContainer>
            <TitleTriangle>
              MONTAJE Y MANTENIMIENTO DE INSTALACIONES ALIMENTARIAS
            </TitleTriangle>
            <TextTriangle>
              En <Negrita>Grinox Industrial</Negrita> ofrecemos soluciones
              integrales en montaje industrial, adaptadas a las exigencias del
              sector alimentario.
            </TextTriangle>
          </TextContainer>
        </ContainerTriangle>
      </ContainerFirst>
      <Container>
        <ContainerText>
          <TitleGrinox>INSTALACIONES A MEDIDA</TitleGrinox>
        </ContainerText>
      </Container>
      <AccordionWrapper>
        <AccordionRow>
          <Container>
            <ContainerText>
              <TitleGrinox>INSTALACIONES A MEDIDA</TitleGrinox>
              <TextGrinox>
                Diseñamos y ejecutamos instalaciones industriales totalmente
                adaptadas a las necesidades de cada cliente
              </TextGrinox>
            </ContainerText>
            <Portada src="/img/Imgs/Deposito1.png" alt="Depósito" />
          </Container>
        </AccordionRow>
        <AccordionWrapper>
          <AccordionRow>
            <Container>
              <ContainerText>
                <TextGrinox>
                  En Grinox Industrial combinamos experiencia técnica y
                  flexibilidad para desarrollar soluciones eficientes, seguras y
                  personalizadas.Nos adaptamos a cada entorno de trabajo,
                  cumpliendo con los más altos estándares del sector
                  alimentarioe industrial. Cada instalación es pensada para
                  maximizar el rendimiento y minimizar los tiempos de parada.
                </TextGrinox>
              </ContainerText>
            </Container>
          </AccordionRow>
        </AccordionWrapper>
      </AccordionWrapper>
      <AccordionWrapper>
        <AccordionRow>
          <Container>
            <Portada src="/img/Imgs/Conexionado.png" alt="Conexionado" />
            <ContainerText>
              <TitleGrinox>CONEXIONADO DE ACERO INOXIDABLE</TitleGrinox>
              <TextGrinox>
                Realizamos conexionado industrial en acero inoxidable con
                acabados de alta calidad, pensado para entornosexigentes.
                Garantizamos seguridad, limpieza y durabilidad en cada unión.
              </TextGrinox>
            </ContainerText>
          </Container>
        </AccordionRow>
      </AccordionWrapper>
      <AccordionWrapper>
        <AccordionRow>
          <Container>
            <ContainerTextSecond>
              Utilizamos técnicas avanzadas de soldadura y ensamblaje, cuidando
              cada detalle para asegurar un flujo óptico y sin contaminaciones.
              Nuestro equipo está especializado en instalaciones para la
              industria alimentaria, donde la presicisión y la higiene no son
              opcionales, sino esenciales.
            </ContainerTextSecond>
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
  width: 70%;
  height: 35rem;
  margin-top: 3%;
`;

const AccordionWrapper = styled.div`
  width: 100%;
  padding: 0 3rem;
  margin: 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.5rem;
`;

const AccordionRow = styled.div`
  display: flex;
  justify-content: center;
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
const ContainerTextSecond = styled.div.attrs(() => ({
  "data-fade-left": true,
}))`
  margin-top: 3%;
  margin-left: 5%;
  color: black;
  background-color: #ffffff;
  border-radius: 8px;
  width: 50%;
  padding: 1% 2%;
`;