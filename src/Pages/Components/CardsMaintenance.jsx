import styled from "styled-components";
import { MdChecklist } from "react-icons/md";
import { FaWrench } from "react-icons/fa";
import { MdWarning } from "react-icons/md";




export default function CardsMaintenance() {
  return (
    <StrengthsSection>
      <StrengthTitle>SENCILLO, EFICAZ Y COMPLETO</StrengthTitle>

      <StrengthGrid>
        <StrengthCard>
          <IconWrapper>
            <MdChecklist />
          </IconWrapper>
          <CardTitle>MANTENIMIENTO <b style={{color:"#447aab"}}>PREVENTIVO</b></CardTitle>
          <CardText>
            Revisiones programadas para evitar fallos y paradas inesperadas.
          </CardText>
        </StrengthCard>

        <StrengthCard>
          <IconWrapper>
            <FaWrench />
          </IconWrapper>
          <CardTitle>MANTENIMIENTO <b style={{color:"#447aab"}}>CORRECTIVO</b></CardTitle>
          <CardText>
            Inspecciones detalladas para asegurar el cumplimiento de normativas.
          </CardText>
        </StrengthCard>

        <StrengthCard>
          <IconWrapper>
            <MdWarning />
          </IconWrapper>
          <CardTitle>SERVICIO <b style={{color:"#447aab"}}>URGENTE</b></CardTitle>
          <CardText>
            Asistencia rápida en caso de fallos críticos o paradas de producción.
          </CardText>
        </StrengthCard>
      </StrengthGrid>
    </StrengthsSection>
  );
}

const StrengthsSection = styled.section`
  max-width: 1100px;
  margin: 5rem auto 3rem;
  padding: 0 2rem;
`;

const StrengthTitle = styled.h2.attrs(() => ({
  "data-fade": true,
}))`
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 2.5rem;
  color: white;
`;

const StrengthGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const StrengthCard = styled.div.attrs(() => ({
  "data-fade": true,
}))`
  background-color: #ffffff;
  color: black;
  border-radius: 12px;
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  border-top: 4px solid #447aab;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.18);
  }
`;

const IconWrapper = styled.div`
  font-size: 2.4rem;
  margin-bottom: 1rem;
  color: #447aab;
`;

const CardTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
`;

const CardText = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
`;
