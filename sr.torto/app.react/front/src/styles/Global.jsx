import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.cdnfonts.com/css/pf-tempesta-seven');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Tempesta Seven', sans-serif;
  }

  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(37, 54, 64, 1);
  }
`;

export default GlobalStyle;
