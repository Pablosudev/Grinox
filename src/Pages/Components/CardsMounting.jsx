import styled from "styled-components";
import {
  FaTools,
  FaCheckCircle,
  FaCogs,
  FaHardHat,
} from "react-icons/fa";

export default function CardsMounting() {
  return (
    <StrengthsSection>
      <StrengthTitle>MONTAJES PROFESIONALES PARA ENTORNOS EXIGENTES.</StrengthTitle>

      <StrengthGrid>
        <StrengthCard>
          <IconWrapper>
            <FaTools />
          </IconWrapper>
          <CardTitle>MONTAJE MECÁNICO</CardTitle>
          <CardText>
            Ensamblaje, anclajes y ajuste de conjuntos con precisión industrial.
          </CardText>
        </StrengthCard>

        <StrengthCard>
          <IconWrapper>
            <FaCheckCircle />
          </IconWrapper>
          <CardTitle>CONEXIONADO Y VERIFICACIÓN</CardTitle>
          <CardText>
            Revisión de conexiones, puntos críticos y validación funcional del
            sistema.
          </CardText>
        </StrengthCard>
        <StrengthCard>
          <IconWrapper>
            <FaCogs />
          </IconWrapper>
          <CardTitle>PUESTA EN MARCHA</CardTitle>
          <CardText>
            Pruebas, calibración y arranque controlado hasta dejarlo operativo.
          </CardText>
        </StrengthCard>
        <StrengthCard>
          <IconWrapper>
            <FaHardHat />
          </IconWrapper>
          <CardTitle>SEGURIDAD Y NORMATIVA</CardTitle>
          <CardText>
            Trabajo con método, señalización y cumplimiento de procedimientos en
            planta.
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

const MountingSection = styled.div`
  margin-top: 5rem;
  padding-left: 2%;
  padding-right: 2%;
  margin-right: 2%;
  margin-left: 2%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  border-radius: 12px;
  color: white;
  text-align: center;
  line-height: 1.8;
  margin-bottom: 5%;
`;
