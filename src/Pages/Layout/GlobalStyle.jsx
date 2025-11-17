import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

  /* ==== FADES BASE ==== */
  [data-fade],
  [data-fade-left],
  [data-fade-right] {
    opacity: 0;
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  /* ==== FADE NORMAL (DESDE ABAJO) ==== */
  [data-fade] {
    transform: translateY(20px);
  }
  .fade-visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* ==== FADE IZQUIERDA ==== */
  [data-fade-left] {
    transform: translateX(-40px);
  }
  .fade-visible-left {
    opacity: 1;
    transform: translateX(0);
  }

  /* ==== FADE DERECHA ==== */
  [data-fade-right] {
    transform: translateX(40px);
  }
  .fade-visible-right {
    opacity: 1;
    transform: translateX(0);
  }

  /* ==== RESET ==== */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: #447AAB;
    color: white;
  }
`;
