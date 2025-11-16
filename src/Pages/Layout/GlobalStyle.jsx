import { createGlobalStyle, keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const GlobalStyle = createGlobalStyle`
  .fade-in {
    opacity: 0;
    animation: ${fadeIn} 0.9s ease forwards;
  }

  .fade-in-delayed {
    opacity: 0;
    animation: ${fadeIn} 0.9s ease forwards;
    animation-delay: 0.3s;
  }

  .fade-in-slow {
    opacity: 0;
    animation: ${fadeIn} 1.4s ease forwards;
  }

  
  [data-fade] {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .fade-visible {
    animation: ${fadeIn} 0.8s ease forwards;
  }

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
