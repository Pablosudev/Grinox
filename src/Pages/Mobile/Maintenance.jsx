import styled from "styled-components";

export default function Maintenance() {
  return (
    <ContainerMaintenance>
      <ImgBackground src="img/Backgrounds/Tuberias.png" alt="" />
      <TitleBox>
        <Title>Montaje y mantenimiento de instalaciones alimentarias</Title>
      </TitleBox>

      <Text>CUIDAMOS TUS INSTALACIONES COMO SI FUERAN NUESTRAS</Text>
      <Container>
        <Info>
          En <Blue>Grinox</Blue> combinamos{" "}
          <Blue>experiencia, rapidez y compromiso</Blue>. Nuestro equipo técnico
          conoce a fondo las exigencias del sector alimentario, lo que nos
          permite anticiparnos a fallos, <Blue>optimizar</Blue> el rendimiento
          de tus instalaciones y <Blue>garantizar</Blue> el cumplimiento de las
          normativas sanitarias. Elegirnos es asegurar continuidad, seguridad y
          tranquilidad operativa.
        </Info>
      </Container>
      <TitleMain>Mantenimiento preventivo</TitleMain>
      <TextMain>Revisiones programadas para evitar fallos y paradas</TextMain>
      <TitleMain>Mantenimiento correctivo</TitleMain>
      <TextMain>
        Inspecciones detalladas para asegurar el cumplimiento de normativas.
      </TextMain>
      <TitleMain>Servicio urgente</TitleMain>
      <TextMain>
        Asistencia rápida en caso de fallos críticos o paradas de producción.
      </TextMain>

      <ContainerColumn>
        <TitleBlue>BENEFICIOS DE HACERLO CON GRINOX.</TitleBlue>
        <Data>Técnicos especializados en entornos alimentarios.</Data>
        <Gear src="img/Logos/Gear.png" alt="" />

        <Data>
          Cumplimiento con normativas <br /> higiénico-sanitarias.
        </Data>
        <Gear src="img/Logos/Gear.png" alt="" />

        <Data>Menos tiempo de parada.</Data>
        <Gear src="img/Logos/Gear.png" alt="" />

        <Data>Respuesta rápida y eficaz.</Data>
        <Gear src="img/Logos/Gear.png" alt="" />

        <Data>Servicio adaptado a cada cliente.</Data>
        <GearR src="img/Imgs/GearR.png" alt="" />
         <GearL src="img/Imgs/GearL.png" alt="" />
      </ContainerColumn>
    </ContainerMaintenance>
  );
}
const ContainerMaintenance = styled.div`
  @media screen and (min-width: 723px){
    display: none;
  }
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
const TitleBox = styled.div`
  border: 2px solid white;
  border-radius: 8px;
  margin: 10%;
  padding: 4%;
  padding-bottom: 0%;
  display: flex;
`;
const Title = styled.h1`
  font-weight: 300;
  font-size: 1.7rem;
`;
const Text = styled.h1`
  font-size: 1.4rem;
  font-weight: 100;
  text-align: center;
  padding-left: 5%;
  padding-right: 5%;
  margin-top: 15%;
`;
const Container = styled.div`
  background-color: white;
  border-radius: 8px;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 10%;
`;
const Info = styled.p`
  font-size: 0.8rem;
  color: black;
  padding: 5%;
`;
const Blue = styled.b`
  color: #447aab;
`;
const TitleMain = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  margin-top: 10%;
  font-weight: 400;
`;
const TextMain = styled.p`
  font-size: 1rem;
  text-align: center;
  padding-left: 5%;
  padding-right: 5%;
  margin-top: 3%;
`;
const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 16px;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 10%;
  align-items: center;
  position: relative;
  padding-bottom: 10%;
  padding-top: 10%;
`;
const TitleBlue = styled.h1`
  font-weight: 300;
  font-size: 1.2rem;
  color: #447aab;
  text-align: center;
`;
const Data = styled.p`
  color: black;
  text-align: center;
  margin-top: 5%;
  font-size: 0.9rem;
`;
const Gear = styled.img`
  object-fit: contain;
  width: 2rem;
  margin-top: 2%;
`;
const GearR = styled.img`
  position: absolute;
  right: 0%;
  top: 0%;
`;
const GearL = styled.img`
  position: absolute;
  top: 30%;
  left: 0%;
  
`;