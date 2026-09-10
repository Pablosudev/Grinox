import CertificatePage from "./CertificatePage";
import source from "../../../assets/Docs/CertificadoRea.pdf";

export default function Rea() {
  return <CertificatePage code="REA" source={source} otherCode="ISO" otherPath="/iso" />;
}
