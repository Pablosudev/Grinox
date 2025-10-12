import styled from "styled-components";

export default function Service() {
  return (
    <>
      <ImgBackground src="img/Backgrounds/Tuberias.png" alt="" />
      <TitleBox>
        <Title>Servicios</Title>
      </TitleBox>
      <ContainerLogosColumn>
        <ContainerLogo>
          <Logo src="img/Logos/GearLogo.png" />
          <DataTitle>FABRICACIÓN</DataTitle>
        </ContainerLogo>
        <ContainerLogo>
          <Logo src="img/Logos/Wrench.png" />
          <DataTitle>INSTALACIÓN</DataTitle>
        </ContainerLogo>
        <ContainerLogo>
          <Logo src="img/Logos/Screw.png" />
          <DataTitle>MANTENIMIENTO</DataTitle>
        </ContainerLogo>
        <GearR src="img/Imgs/GearR.png"/>
        <GearL src="img/Imgs/GearL.png"/>
        <GearRBottom src="img/Imgs/GearR.png"/>
        <ContainerLogoFlex>
            <Arrow src="img/Logos/ArrowL.png"/>
            <Cross src="img/Logos/WrenchCross.png"/>
            <Arrow src="img/Logos/ArrowR.png"/>
        </ContainerLogoFlex>
      </ContainerLogosColumn>
      <div>
        <h1>FABRICACIONES</h1>
      </div>
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
  margin: 10%;
  padding: 4%;
  padding-bottom: 18%;
  padding-top: 18%;

  display: flex;
  justify-content: center;
`;
const Title = styled.h1`
  font-weight: 300;
  font-size: 1.7rem;
`;
const ContainerLogosColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25%;
  position: relative;
`;
const GearR = styled.img`
  position: absolute;
  right: 0%;
  top: 0%;
`;
const GearRBottom = styled.img`
  position: absolute;
  right: 0%;
  bottom: 4%;
`;
const GearL = styled.img`
  position: absolute;
  top: 30%;
  left: 0%;
`;
const Logo = styled.img`
    object-fit: contain;
    width:7rem;
`;
const ContainerLogo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15%;
`;
const DataTitle = styled.h1`
    font-weight: 400;
    font-size: 1.5rem;
`;
const ContainerLogoFlex = styled.div`
    display: flex;
    margin-top: 6%;

`;
const Arrow = styled.img`
object-fit: contain;
width: 4rem;
`;
const Cross = styled.img`
object-fit: contain;
width: 6rem;
z-index: 100;
`;