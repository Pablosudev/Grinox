import styled from "styled-components";
import SliderWorks from "../Components/SliderWorks";

export default function Home() {
  return (
    <ContainerHome>
      <ImgBackground src="img/Backgrounds/Tuberias.png" alt="" />
      <Container>
        <Title>¿QUIENES SOMOS?</Title>
        <div>
          {/* <ImgHome src="img/Imgs/Extraccion.png" alt="" /> */}
          <ContainerText>
            <p>
              Nuestra empresa, Grinox Montaje Industrial S.L., nace de la
              inquietud emprendedora de un trabajador de la industria calderera
              con más de 20 años de experiencia en el montaje de instalaciones
              de almazaras, tanto a nivel nacional como internacional.
            </p>
          </ContainerText>
        </div>
      </Container>
      <ContainerSecond>
        <Title>¿QUÉ HACEMOS EN GRINOX?</Title>
        <Text>
          En nuestra empresa nos encargamos de que todo funcione a la perfección
          de principio a fin, abarcando desde la fabricación de la maquinaria
          hasta su montaje y desmontaje.
        </Text>
        <List>
          <li>Fabricación de equipos de control de procesos industriales.</li>
          <li>Instalación de maquinaria industrial en plantas industriales.</li>
          <li>Montaje de equipos de control de procesos industriales.</li>
          <li>Desmontaje de maquinaria y equipos de gran escala.</li>
          <li>Actividades de los mecánicos comprobadores de maquinaria.</li>
          <li>Instalación de maquinaria en general.</li>
          <li>Construcción de grandes depósitos.</li>
        </List>
        <GearR src="img/Imgs/GearR.png" alt="" />
        <GearL src="img/Imgs/GearL.png" alt="" />
      </ContainerSecond>
      <ContainerThree>
        <TitleSecond>¿QUÉ FABRICAMOS?</TitleSecond>
        <Text>
          En la producción de Grinox contamos el trabajo de varios tipos de
          maquinaría fabricada con nuestras propias manos con las que
          conseguimos ofrecer el mejor servicio y los mejores resultados a
          nuestro clientes. A continuación os mostramos algunos de nuestros
          trabajos:
        </Text>
        
      </ContainerThree>
      <Title>GALERÍA DE TRABAJOS</Title>
      <SliderWorks />
      
    </ContainerHome>
  );
}
const ContainerHome = styled.div`
  @media screen and (min-width: 723px){
    display: none;
  }
`;
const Container = styled.div`
  padding-left: 5%;
  padding-right: 5%;
  margin-top: 10%;
`;
const Title = styled.h1`
  text-align: center;
  margin-top: 5%;
  margin-bottom: 5%;
  font-size: 1.5rem;
  font-weight: 300;
`;
const ContainerText = styled.div`
  color: black;
  background-color: white;
  width: 100%;
  padding: 2%;
  text-align: center;
`;
const ContainerSecond = styled.div`
  position: relative;
  padding-top: 40%;
`;
const GearR = styled.img`
  position: absolute;
  right: 0%;
  top: 0%;
  z-index: -1;
`;
const GearL = styled.img`
  position: absolute;
  top: 30%;
  z-index: -1;
`;
const ImgBackground = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;
const Text = styled.p`
  margin-left: 5%;
  margin-right: 5%;
  text-align: center;
`;
const List = styled.ul`
  padding-left: 13%;
  padding-right: 13%;
  margin-top: 10%;
  margin-bottom: 10%;
`;
const ContainerThree = styled.div`
  background-color: white;
  color: black;
  border-radius: 8px;
  position: relative;
  margin-left: 5%;
  margin-right: 5%;
  padding-bottom: 5%  
`;
const TitleSecond = styled.h1`
  color: #3c6991;
  font-size: 1.4rem;
  font-weight: 300;
  text-align: center;
  padding-top: 2rem;
  margin-bottom: 5%;
`;
