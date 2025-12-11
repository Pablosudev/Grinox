import styled from "styled-components";
import Accordion from "../Components/Accordion";
import CardsMaintenance from "../Components/CardsMaintenance";
export default function MaintenanceDesktop() {
  return (
    <MainDesk>
      <ContainerFirst>
        <ImgBackground src="img/Backgrounds/OlivosFondo.png" />
        <Polygon src="img/Logos/PolygonBlue.png" />
        <ContainerTriangle>
          <TextContainer>
            <TitleTriangle>
              MANTENIMIENTO DE INSTALACIONES ALIMENTARIAS
            </TitleTriangle>
            <TextTriangle>
              En <Negrita>Grinox Industrial</Negrita>, combinamos experiencia,
              rapidez y compromiso. Nuestro equipo técnico conoce a fondo las
              exigencias del sector alimentario, lo que nos permite anticiparnos
              a fallos, optimizar el rendimiento de tus instalaciones y
              garantizar el cumplimiento de las normativas sanitarias. Elegirnos
              es asegurar continuidad, seguridad y tranquilidad operativa.
            </TextTriangle>
          </TextContainer>
        </ContainerTriangle>
      </ContainerFirst>
      <AccordionWrapper>
        <AccordionRow>
          <Container>
            <ContainerText>
              <TitleGrinox>¿POR QUÉ EN GRINOX?</TitleGrinox>
              <TextGrinox>
                En Grinox Industrial, combinamos experiencia, rapidez y
                compromiso. Nuestro equipo técnico conoce a fondo las exigencias
                del sector alimentario, lo que nos permite anticiparnos a
                fallos, optimizar el rendimiento de tus instalaciones y
                garantizar el cumplimiento de las normativas sanitarias.
                Elegirnos es asegurar continuidad, seguridad y tranquilidad
                operativa.
              </TextGrinox>
            </ContainerText>
            <Portada
              src="/img/Backgrounds/portadilla.jpg"
              alt="portadaGrinox"
            />
          </Container>
        </AccordionRow>
      </AccordionWrapper>
      <CardsMaintenance />
      <Title>BENEFICIOS DE HACERLO CON <b style={{color:"#447aab"}}>GRINOX</b></Title>

      <ListContainer>
         <List>
          <ListItem>
            TÉCNICOS ESPECIALIZADOS EN ENTORNOS ALIMENTARIOS.
          </ListItem>
          <ListItem>
            CUMPLIMIENTO CON NORMATIVAS.
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
        <Logo src="img/Logos/GR.png"/>
      </ListContainer>
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
  padding-top: 4%;
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
  height: 25rem;
  margin-top: 3%;
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
const Title = styled.h1.attrs(() => ({
  "data-fade-left": true,
}))`
  background-color: #ffffff;
  color: black;
  border-radius: 8px;
  font-weight: 500;
  font-size: 1.5rem;
  padding: 1% 3%;
  margin-left: 5%;
  width: 30%;
  margin-top: 5%;
  margin-bottom:5%;
  text-align: center;

`;

const Logo = styled.img`
width: 7rem;
margin-left: 2%;
position:absolute;
right: 5%;
bottom: 3%;
`;
const ListContainer = styled.div.attrs(() => ({
  "data-fade-right": true,
}))`
  background-color: white;
  color: black;
  border-radius: 12px;
  padding: 2rem 3rem;
  max-width: 800px;
  margin: 3rem;
  margin-bottom: 0;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  border-left: 6px solid #447aab;
  position: relative;
  left:25%;
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
