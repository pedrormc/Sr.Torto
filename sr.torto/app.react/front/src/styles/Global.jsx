import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Tempesta Seven';
    src: url('../fontes/pf_tempesta_seven_compressed_bold.ttf') format('truetype');
    /* Adicione outras propriedades de fonte conforme necessário, como font-weight, font-style, etc. */
  }

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
    background-color: #253640;
  }
`;

export default GlobalStyle;
