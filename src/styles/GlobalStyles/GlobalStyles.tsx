import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  html, body, div, span, h1, h2, h3, h4, h5, h6, p, a, ul, li, ol, input, button, textarea {
    box-sizing: border-box;

    padding: 0;
    margin: 0;
  }

  html {
    width: 100%;
    height: 100%;

    font-size: 62.5%;

    overflow: hidden;
  }


  body , #root {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyles;
