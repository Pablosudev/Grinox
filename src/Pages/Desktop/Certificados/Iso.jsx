import styled from "styled-components";
import CertificadoIso from "../../../assets/Docs/CertificadoIso.pdf"
export default function Iso() {
  return (
    <ContainerDocx>
      <DocFrame src={CertificadoIso} title="Certificado Iso" />
    </ContainerDocx>
  );
}
const ContainerDocx = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-image: url("/img/Backgrounds/fondoGear.png");
  background-repeat: repeat;
  background-size: auto;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  z-index: 0;
  padding-bottom: 5%;
`;
const DocFrame = styled.iframe`
 margin-top: 5%;
  width: 80%;
  height: 100vh;
  border: none;
  border-radius: 16px;
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.45);
`;
