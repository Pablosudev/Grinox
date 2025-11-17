import styled from "styled-components";

export default function Contact() {
  return (
    <ContainerContact>
      <ImgBackground src="img/Backgrounds/Tuberias.png" />
      <TitleBox>
        <Title>Contacto</Title>
      </TitleBox>
      <TitleWork>¿DONDE TARABAJAMOS?</TitleWork>
      <Data>Hemos realizado intervenciones por todo el mundo.</Data>
      <ImgMap src="img/Imgs/Map.png" />
      <TitleWorkSecond>
        HABLEMOS SOBRE TU ISNTALACIÓN. <br /> SOLICITA TU PRESUPUESTO SIN
        COMPROMISO.
      </TitleWorkSecond>
      <ContainerInput>
        <TitleLabel htmlFor="">NOMBRE</TitleLabel>
        <InputBox type="text" />
        <TitleLabel htmlFor="">TELÉFONO</TitleLabel>
        <InputBox type="text" />
        <TitleLabel htmlFor="">CONSULTA</TitleLabel>
        <InputBig type="text" />
        <Gear src="img/Imgs/GearL.png" />
      </ContainerInput>
      <ButtonSend>ENVIAR</ButtonSend>
    </ContainerContact>
  );
}
 
const ContainerContact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  padding-bottom: 18%;
  padding-top: 18%;
  width: 18rem;
  display: flex;
  justify-content: center;
`;
const Title = styled.h1`
  font-weight: 300;
  font-size: 1.7rem;
`;
const ContainerInput = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Gear = styled.img`
  position: absolute;
  left: -28%;
  top: -45%;
  z-index: -1;
  height: 30rem;
`;
const TitleWork = styled.div`
  font-size: 1.5rem;
  text-align: center;
`;
const TitleWorkSecond = styled.div`
  font-size: 1.2rem;
  text-align: center;
  padding-left: 2%;
  padding-right: 2%;
  margin-bottom: 5%;
`;
const ImgMap = styled.img``;
const Data = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  padding-left: 5%;
  padding-right: 5%;
  margin-bottom: 5%;
`;
const TitleLabel = styled.label`
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 5%;
  margin-top: 5%;
`;
const InputBox = styled.input`
  border: none;
  height: 1.7rem;
  width: 15rem;
`;
const InputBig = styled.input`
  border: none;
  height: 5rem;
  width: 15rem;
`;
const ButtonSend = styled.button`
  margin-top: 5%;
  margin-bottom: 5%;
  width: 8rem;
  border-radius: 8px;
  border: solid 1px white;
  background-color: #447aab;
  color: white;
  padding-top: 2%;
  padding-bottom: 2%;
  padding-left: 3%;
  padding-right: 3%;
`;
