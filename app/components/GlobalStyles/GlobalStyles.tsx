import { createGlobalStyle } from "styled-components";
import { clamp } from "@utils/clamp";
import createColorVariables from "@utils/createColorVariables";
import COLORS, { LIGHT_THEME_COLORS } from "@constants/colors";

// TODO: Box shadows custom propirties

const GlobalStyles = createGlobalStyle`
  :root {
    ${createColorVariables(LIGHT_THEME_COLORS)}

    --border-sm: 1px solid var(--borderColor);
    --border-md: 2px solid var(--borderColor);
    --border-lg: 3px solid var(--borderColor);

    --box-shadow-sm: 1px 2px 0px var(--borderColor);
    --box-shadow-md: 2px 3px 0px var(--borderColor);
    --box-shadow-lg: 3px 4px 0px var(--borderColor);
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    line-height: calc(1em + 0.5rem);
    margin: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  html, body {
    height: 100%;
    font-family: "Inter", Arial, Helvetica, sans-serif;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: var(--background);
    color: var(--textColor);
    transition: color 400ms ease, background-color 400ms ease ;
  }

  ::selection {
    background-color: blue;
    color: #fff;
  }

  img, picture, video, canvas {
    display: block;
    max-width: 100%;
    line-height: 0;
  }

  input, button, textarea, select {
    font: inherit;
  }

  #__next {
    width: 100%;
    height: 100%;
  }

  #root, #__next {
    z-index: 0;
  }

  #__next {
    width: 100%;
    height: 100%;
  }
  
  /* Custom Typography Styles */
  h1, h2, h3, h4, h5, h6, p {
    min-height: 0vh;
    color: inherit;
    overflow-wrap: break-word;
  }

  h1 {
    font-weight: 700;
    font-size: ${clamp(56.39, 70.66)};
    font-size: 56.39px;
  }

  h2 {
    font-weight: 600;
    /* font-size: ${clamp(45.95, 56.93)} */
    font-size: 56.93px;
  }

  h3 {
    font-weight: 600;
    font-size: ${clamp(37.16, 45.95)}
  }

  h4 {
    font-weight: 500;
    font-size: ${clamp(30.13, 37.16)}
  }

  h5 {
    font-weight: 500;
    font-size: ${clamp(24.5, 30.13)};
  }

  h6 {
    font-weight: 500;
    font-size: ${clamp(20.0, 24.5)};
  }

  p, li, button {
    font-weight: 400;
    font-size: ${clamp(18.0, 20.0)};
  }

  input {
    font-size: 1rem;
  }

  ul {
    padding: 0;
  }


  small {
    font-weight: 400;
    font-size: ${clamp(14, 16)};;
  }

  // Reach UI Dialog 

  :root {
    --reach-dialog: 1;
  }

  [data-reach-dialog-overlay] {
    background: hsla(0, 0%, 0%, 0.33);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
  }

  [data-reach-dialog-content] {
    width: 50vw;
    margin: 10vh auto;
    background: white;
    padding: 2rem;
    outline: none;
  }
`;

export default GlobalStyles;
