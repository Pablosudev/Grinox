import styled from "styled-components";
import { FaGlobeEurope } from "react-icons/fa";
import { GiMetalBar } from "react-icons/gi";
import { FaMedal } from "react-icons/fa";
import { GiGearHammer } from "react-icons/gi";

export default function Cards() {
  return (
    <StrengthsSection>
      <StrengthTitle>NUESTROS PUNTOS FUERTES</StrengthTitle>

      <StrengthGrid>
        <StrengthCard>
          <IconWrapper>
            <FaMedal />
          </IconWrapper>
          <CardTitle>20+ AÑOS DE EXPERIENCIA</CardTitle>
          <CardText>
            Más de dos décadas trabajando en montaje industrial de almazaras,
            proyectos complejos y soluciones a medida para nuestros clientes.
          </CardText>
        </StrengthCard>

        <StrengthCard>
          <IconWrapper>
            <FaGlobeEurope />
          </IconWrapper>
          <CardTitle>PROYECTOS INTERNACIONALES</CardTitle>
          <CardText>
            Montajes realizados en diferentes puntos de España y otros países,
            adaptándonos a normativas, equipos y necesidades de cada
            instalación.
          </CardText>
        </StrengthCard>

        <StrengthCard>
          <IconWrapper>
            <GiMetalBar />
          </IconWrapper>
          <CardTitle>ESPECIALISTAS EN INOX</CardTitle>
          <CardText>
            Experiencia específica en acero inoxidable: tuberías, pasarelas,
            estructuras, depósitos y componentes clave para almazaras modernas.
          </CardText>
        </StrengthCard>

        <StrengthCard>
          <IconWrapper>
            <GiGearHammer />
          </IconWrapper>
          <CardTitle>SOLDADORES HOMOLOGADOS</CardTitle>
          <CardText>
            Personal cualificado y homologado, con soldaduras limpias, seguras y
            duraderas, pensadas para soportar campañas exigentes.
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
  grid-template-columns: repeat(4, minmax(0, 1fr));
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
