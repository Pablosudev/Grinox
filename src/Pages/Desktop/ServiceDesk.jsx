import styled from "styled-components";
import maquinas from "../../jsonCards.json";

export default function ServiceDesk() {
  return (
    <ContainerServiceDesk>
      <ContainerIcons>
        <ContainerLogo>
          <IconService src="img/Logos/GearLogo.png" />
          <IconTitle>FABRICACIÓN</IconTitle>
        </ContainerLogo>
        <ContainerRow>
          <img src="img/Logos/ArrowL.png" />
          <img src="img/Logos/Gear.png" />
          <img src="img/Logos/ArrowR.png" />
        </ContainerRow>
        <ContainerLogo>
          <IconService src="img/Logos/Wrench.png" />
          <IconTitle>INSTALACIÓN</IconTitle>
        </ContainerLogo>
        <ContainerRow>
          <img src="img/Logos/ArrowL.png" />
          <img src="img/Logos/Gear.png" />
          <img src="img/Logos/ArrowR.png" />
        </ContainerRow>
        <ContainerLogo>
          <IconService src="img/Logos/Screw.png" />
          <IconTitle>MANTENIMIENTO</IconTitle>
        </ContainerLogo>
      </ContainerIcons>
      <TitleF>NUESTRAS FABRICACIONES</TitleF>
      <Fabricacion>
        <CardWrapper>
          <ContainerProduct>
            <TitleInside>EQUIPO DE LIMPIEZA GR-200</TitleInside>

            <ProductImage src="img/Imgs/MaquinaLimpieza.png" alt="GR-200" />

            <Overlay />

            <ProductContent>
              <InfoProduct>
                Nuestro equipo GR-200 es un equipo de limpieza profesional para
                depósitos de cualquier dimensión, fabricado específicamente para
                adaptarse tanto al tamaño de cada depósito como a las
                necesidades de nuestros clientes.
              </InfoProduct>
            </ProductContent>
          </ContainerProduct>
        </CardWrapper>
        <CardWrapper>
          <ContainerProduct>
            <TitleInside>
              CARRO PARA TRANSPORTES DE SUSTANCIAS QUÍMICAS
            </TitleInside>

            <ProductImage src="img/Imgs/Carrito.png" alt="GR-200" />

            <Overlay />

            <ProductContent>
              <InfoProduct>
                Para garantizar siempre la seguridad de nuestros trabajadores
                contamos con nuestro carro de trasporte, pensado y diseñado con
                materiales muy resistentes que hacen de esta tarea algo
                sencillo, permitiendonos manipular los productos químicos de la
                empresa Masul, nuestra empresa colaboradora, con gran facilidad.
              </InfoProduct>
            </ProductContent>
          </ContainerProduct>
        </CardWrapper>
      </Fabricacion>
      <TitleF>MAQUINARIA</TitleF>
      <Products>
        {maquinas.map((maq) => (
          <CardWrapper>
            <ContainerProduct>
              <TitleInside>{maq.name}</TitleInside>

              <ProductImage src={maq.imagen} />

              <Overlay />

              <ProductContent>
                <InfoProduct>{maq.info}</InfoProduct>
              </ProductContent>
            </ContainerProduct>
          </CardWrapper>
        ))}
      </Products>
    </ContainerServiceDesk>
  );
}

const ContainerServiceDesk = styled.div`
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
const ContainerIcons = styled.div.attrs(() => ({
  "data-fade": true,
}))`
  display: flex;
  justify-content: center;
  padding-top: 8%;
`;
const IconService = styled.img`
  width: 12rem;
  height: auto;
`;
const IconTitle = styled.h1`
  font-weight: 400;
  font-size: 1.5rem;
  text-align: center;
`;

const ContainerLogo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 3%;
`;
const ContainerRow = styled.div`
  display: flex;
  align-items: center;
`;
const Fabricacion = styled.div`
  padding-top: 2%;
  display: flex;
  justify-content: center;
  gap: 2%;
`;
const TitleF = styled.h1.attrs(() => ({
  "data-fade-left": true,
}))`
  background-color: #ffffff;
  color: #447aab;
  border-radius: 8px;
  font-weight: 500;
  font-size: 1.5rem;
  padding: 1% 3%;
  margin: 8% 30%;
  margin-bottom: 4%;
  text-align: center;
`;

const CardWrapper = styled.div`
  width: 380px;
`;

const ContainerProduct = styled.div`
  width: 100%;
  height: 450px;
  background: linear-gradient(
    135deg,
    #d9edff 0%,
    #eef7ff 100%
  ); /* 🔹 Elegante y muy suave */

  border-radius: 18px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.18);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
  margin-bottom: 8%;
  &:hover {
    transform: scale(1.035);
    box-shadow: 0 14px 32px rgba(0, 0, 0, 0.28);
  }
`;

const TitleInside = styled.h3`
  position: absolute;
  top: 14px;
  left: 18px;
  z-index: 5;
  max-width: 90%;
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  padding: 6px 12px;
  text-align: center;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(3px);
  border-radius: 8px;

  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;

  position: absolute;
  top: 0;
  left: 0;

  transition: transform 0.8s ease;

  ${ContainerProduct}:hover & {
    /* Zoom hacia la esquina superior derecha */
    transform: scale(1.28) translate(12%, -12%);
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;

  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0.2),
    transparent
  );
  opacity: 0;

  transition: opacity 0.5s ease;

  ${ContainerProduct}:hover & {
    opacity: 1;
  }
`;

const ProductContent = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1.8rem;

  opacity: 0;
  transform: translateY(25px);
  transition: 0.5s ease;

  ${ContainerProduct}:hover & {
    opacity: 1;
    transform: translateY(0);
    backdrop-filter: blur(8px);
    background: rgba(0, 0, 0, 0.35);
  }
`;

const InfoProduct = styled.p`
  font-size: 0.95rem;
  color: #ffffff;
  line-height: 1.45;
  font-weight: 300;
`;
const Products = styled.div`
  padding-top: 2%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2%;
`;
