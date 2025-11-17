import { useState } from "react";
import styled from "styled-components";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <AccordContainer>
      <AccordHeader
        onClick={() => setOpen(!open)}
        className={open ? "open" : ""}
      >
        <h3>{title}</h3>
        {open ? <FaChevronUp /> : <FaChevronDown />}
      </AccordHeader>

      <AccordContent className={open ? "open" : ""}>
        <div className="inner">{children}</div>
      </AccordContent>
    </AccordContainer>
  );
}

// 🎨 ESTILOS

const AccordContainer = styled.div.attrs(() => ({
  "data-fade": true,
}))`
 width: 850px;      /* ← Fijo */
  max-width:90%;  /* ← Evita que se estire */
  background: rgba(255, 255, 255, 0.92);
  border-radius: 14px;
  padding: 0;
  border: 2px solid #447aab;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);
  transition: all 0.25s ease;
  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.18);
    transform: translateY(-2px);
  }
`;


const AccordHeader = styled.div`
  padding: 1.2rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  h3 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 600;
    color: #1e2a35;
  }

  svg {
    font-size: 1.15rem;
    color: #447aab;
    transition: transform 0.3s ease;
  }

  &.open svg {
    transform: rotate(180deg);
  }
`;

const AccordContent = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.45s ease;

  &.open {
    max-height: 600px; 
  }

  .inner {
    padding: 0 1.5rem 1.2rem;
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.35s ease, transform 0.35s ease;
    color: #1e2a35;
  }

  &.open .inner {
    opacity: 1;
    transform: translateY(0);
  }
`;
const AccordionWrapper = styled.div`
  width: 100%;
  padding: 0 3rem; /* deja espacio respirable */
  margin: 4rem 0;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

`;

const AccordionRow = styled.div`
  display: flex;
  width: 100%;

  &:nth-child(odd) {
    justify-content: flex-start; /* IZQUIERDA */
  }

  &:nth-child(even) {
    justify-content: flex-end;   /* DERECHA */
  }

  @media (max-width: 900px) {
    justify-content: center;
  }
`;
