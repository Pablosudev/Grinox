import styled from "styled-components";

export default function HomeDesktop() {
  return (
    <>
      <ContainerFirst>
        <ImgBackground src="img/Backgrounds/OlivosFondo.png" />
        <Polygon src="img/Logos/PolygonBlue.png" />
        <ContainerTriangle>
          <TextContainer>
            <TitleTriangle>¿QUIÉNES SOMOS?</TitleTriangle>
            <TextTriangle>
              Nuestra empresa, Grinox Montaje Industrial SL, <br />
              nace de la inquietud emprendedora de un <br />
              trabajador de la industria calderera con más de <br />
              20 años de experiencia en el montaje de <br />
              instalaciones de almazaras tanto nacionales <br />
              como internacionales.
            </TextTriangle>
          </TextContainer>
        </ContainerTriangle>
      </ContainerFirst>
      <ContainerSecond>
        <ContainerTitle>QUE HACEMOS EN GRINOX</ContainerTitle>
        <ContainerGear>
  <GearContainer>
    <GearBlue src="img/Logos/BlueGear.png"/>
    <GearText>
      MANTENIMIENTO
      <br />
      <span>Ver más</span>
    </GearText>
  </GearContainer>

  <GearContainer>
    <GearBlue src="img/Logos/BlueGear.png" alt="" />
    <GearText>
      MONTAJE
      <br />
      <span>Ver más</span>
    </GearText>
  </GearContainer>

  <GearContainer>
    <GearBlue src="img/Logos/BlueGear.png" alt="" />
    <GearText>
      SERVICIOS
      <br />
      <span>Ver más</span>
    </GearText>
  </GearContainer>
</ContainerGear>
      </ContainerSecond>
    </>
  );
}
// 🎨 ESTILOS

const ContainerFirst = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
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
const ContainerSecond = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url("img/Imgs/Trabajador.png"),
    url("img/Backgrounds/portadilla.jpg");
  background-position: right center, left center;
  background-size: 40% 100%, 60% 100%;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
`;

const ContainerTitle = styled.div`
  position: absolute;
  top: 7%;
  right: 10%;
  background-color: white;
  color: black;
  padding: 2% 3% 2% 3%;
  border: solid 4px #447aab;
`;
const ContainerGear = styled.div`
  display: flex;
  justify-content: center;
  top: 22%;
  right: 1%;
  position: absolute;
  flex-wrap: wrap;
  max-width: 40rem;
`;

const GearContainer = styled.div`
  position: relative;
  display: inline-block;
  text-align: center;
`;

const GearBlue = styled.img`
  width: 280px;
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
  font-size: 1.1rem;
  line-height: 1.4;

  span {
    font-weight: 400;
    font-size: 0.9rem;
  }
`;