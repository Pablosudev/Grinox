import CertificatePage from "./CertificatePage";
import source from "../../../assets/Docs/CertificadoIso.pdf";

export default function Iso() {
  return <CertificatePage code="ISO" source={source} otherCode="REA" otherPath="/rea" />;
}
