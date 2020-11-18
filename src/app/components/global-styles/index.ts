import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body, h1, h2, h3, ul, li {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-size: 100%;
  }

  body {
    background: ${({ theme }) => theme.GLOBAL.BACKGROUND_COLOR};
    font-family: helvetica, arial, sans-serif;
    font-size: ${({ theme }) => theme.GLOBAL.FONT_SIZE};
    color: ${({ theme }) => theme.GLOBAL.FONT_COLOR};
    line-height: 1;
  }
`;
