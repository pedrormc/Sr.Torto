import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0px;
    padding: 0;
    font-family: 'poppins', sans-serif;
    
  }
  
  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #474747;
  }
  
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #ff8c00;
    text-align: center;
  }

  li {
    float: left;
  }
  
  li a {
    display: block;
    color: rgb(0, 0, 0);
    text-align: center;
    padding: 18px 30px;
    text-decoration: none;
    
    

  }
  

  li a:hover {
    background-color: #6e3d00;
    color: #000000;
    border-bottom: solid 5px #000000;

  }
  .logo {
    border: 1px solid black;
    width: 100%;
    height: 120px;
    background-color:#000000;
  }
  
  img {
    width: 400px;

    object-fit: fill;
    position: relative;
    left: 2px;
    top: 35px;
    
  }

  nav{
    list-style-type:none;
    margin: 0;
    padding: 0;
  }
  #bloco{
    background-color: #FFBE27;
  }
`;

export default GlobalStyle;

