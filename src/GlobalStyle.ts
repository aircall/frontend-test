import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, h1, h2, h3, ul, li {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-size: 13px;
  }
  
  body {
    background: #233142;
    font-family: helvetica, arial, -serif;
    color: #333333;
    line-height: 1;
  }
  
  #app{
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
  a {
    color: inherit; 
    text-decoration: inherit;
  }
`;

export default GlobalStyle;
