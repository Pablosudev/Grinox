import styled from "styled-components";

export default function Mounting() {
  return (
    <>
      <ImgBackground src="img/Backgrounds/Tuberias.png" alt="" />
      <TitleBox>
        <Title>Montaje y mantenimiento de instalaciones alimentarias</Title>
      </TitleBox>
      <Box>
        <Text>
          En Grinox Industrial ofrecemos soluciones integrales en montaje
          industrial, adaptadas a las exigencias del sector alimentario{" "}
        </Text>
      </Box>
      <Container>
        <Polygon src="img/Backgrounds/Polygon1.png" alt="" />
        <TitlePolygon>Intalaciones a medida</TitlePolygon>
        <ContainerText>
          <p>
            Diseñamos y ejecutamos instalaciones totalmente adaptadas a las
            necesidades de cada cliente.
          </p>
        </ContainerText>
        <ContainerImg src="img/Imgs/Container.png" alt="" />
      </Container>
      <Container>
        <Polygon2 src="img/Backgrounds/Polygon1.png" alt="" />
        <TitlePolygon2>Conexionado de acero inoxidable</TitlePolygon2>
        <ContainerText2>
          <p>
            Conexionado industrial en acero inoxidable con acabados de alta
            calidad, <br />
            pensados para entornos exigentes.
          </p>
        </ContainerText2>
        <ConexionadoImg src="img/Imgs/Conexionado.png" alt="" />
      </Container>
    </>
  );
}

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
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 10%;
  padding: 4%;
  padding-bottom: 0%;
  display: flex;
`;
const Title = styled.h1`
  font-weight: 300;
  font-size: 1.7rem;
`;

const Gear = styled.img`
  width: 5rem;
  object-fit: contain;
`;
const Box = styled.div`
  border-radius: 8px;
  background-color: white;
  color: black;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 15%;
  margin-bottom: 10%;
  padding: 5%;
`;
const Text = styled.h1`
  font-weight: 300;
  font-size: 1.2rem;
`;
const Container = styled.div`
  position: relative;
`;
const Polygon = styled.img`
  width: 100%;
  height: 40rem;
  position: relative;
`;
const Polygon2 = styled.img`
  width: 100%;
  height: 40rem;
  position: relative;
  transform: scaleX(-1);
`;
const TitlePolygon = styled.h1`
  color: #447aab;
  font-size: 1.7rem;
  position: absolute;
  top: 1%;
  margin-left: 5%;
`;
const TitlePolygon2 = styled.h1`
  color: #447aab;
  font-size: 1.7rem;
  position: absolute;
  top: 1%;
  margin-left: 15%;
`;
const ContainerText = styled.div`
  width: 18rem;
  color: black;
  padding-left: 5%;
  position: absolute;
  top: 8%;
  font-size: 1.2rem;
`;
const ContainerText2 = styled.div`
  width: 17rem;
  color: black;
  padding-left: 15%;
  position: absolute;
  top: 17%;
  right: 2%;
  font-size: 1rem;
  text-align: center;
`;
const ContainerImg = styled.img`
  position: absolute;
  right: 5%;
  top: 25%;
`;
const ConexionadoImg = styled.img`
  position: absolute;
  left: 0%;
  top: 20%;
`;
