import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

  /* ==== RESET ==== */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: #fff;
    color: #172c3d;
    min-width: 320px;
    overflow-x: hidden;
  }

  button,
  input,
  textarea {
    font: inherit;
  }

  img {
    max-width: 100%;
  }
`;
