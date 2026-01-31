import styled from "styled-components";
import SliderMachine from "../Components/SliderMachine";
import SliderContainer from "../Components/SliderContainer";
import SliderProduct from "../Components/SliderProduct";

export default function Service() {
  return (
    <ContainerService>
      <ImgBackground src="img/Backgrounds/Tuberias.png" />
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
        <GearR src="img/Imgs/GearR.png" />
        <GearL src="img/Imgs/GearL.png" />
        <GearRBottom src="img/Imgs/GearR.png" />
        <ContainerLogoFlex>
          <Arrow src="img/Logos/ArrowL.png" />
          <Cross src="img/Logos/WrenchCross.png" />
          <Arrow src="img/Logos/ArrowR.png" />
        </ContainerLogoFlex>
      </ContainerLogosColumn>
      <div>
        {/* <DataTitle>FABRICACIONES</DataTitle>
        <ContainerProduct>
          <ContainerProductFlex>
            <TitleProduct>
              Carro para transporte de sustancias químicas
            </TitleProduct>
            <Product src="img/Imgs/Carro.png" alt="" />
          </ContainerProductFlex>
          <DataProduct>
            Para garantizar siempre la seguridad de nuestros trabajadores
            contamos con nuestro carro de trasporte, pensado y diseñado con
            materiales muy resistentes que hacen de esta tarea algo sencillo,
            permitiendonos manipular los productos químicos de la empresa Masul,
            nuestra empresa colaboradora, con gran facilidad.
          </DataProduct>
        </ContainerProduct> */}
        <TitleMachine>NUESTRAS FABRICACIONES</TitleMachine>
        <SliderProduct/>
        <TitleMachine>MAQUINARIA PARA ALMAZARAS</TitleMachine>
        <SliderMachine />
        <DataTitle>DEPÓSITOS</DataTitle>
        <ContainerProduct>
          <Deposit src="img/Imgs/Deposito1.png" alt="" />
          <DataProductDeposit>
            Para garantizar siempre la seguridad de nuestros trabajadores
            contamos con nuestro carro de trasporte, pensado y diseñado con
            materiales muy resistentes que hacen de esta tarea algo sencillo,
            permitiendonos manipular los productos químicos de la empresa Masul,
            nuestra empresa colaboradora, con gran facilidad.
          </DataProductDeposit>
        </ContainerProduct>
        <SliderContainer />
      </div>
    </ContainerService>
  );
}
const ContainerService = styled.div`
  @media screen and (min-width: 723px) {
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
  bottom: 6%;
`;
const GearL = styled.img`
  position: absolute;
  top: 30%;
  left: 0%;
`;
const Logo = styled.img`
  object-fit: contain;
  width: 7rem;
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
  text-align: center;
`;
const ContainerLogoFlex = styled.div`
  display: flex;
  margin-top: 6%;
  margin-bottom: 10%;
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
const ContainerProduct = styled.div`
  background-color: white;
  border-radius: 8px;
  margin: 5%;
  padding-bottom: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Deposit = styled.img`
  object-fit: contain;
  width: 10rem;
  margin-top: 5%;
`;
const DataProductDeposit = styled.p`
  color: black;
  text-align: center;
  margin-top: 5%;
  padding-left: 5%;
  padding-right: 5%;
`;
const TitleMachine = styled.h1`
  color: white;
  font-size: 1.7rem;
  font-weight: 400;
  text-align: center;
  margin-top: 15%;
`;
