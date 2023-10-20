import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Roboto:wght@100;300;400;500;700;900&family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap');

  *{
    margin: 0px;
    padding: 0px;
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
    margin: 0px;
    padding-top: 50px;
    overflow: hidden;
    background-color: #E4EFF8;
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
    margin: 0px;
    padding: 0px;
  }
  
  
  header{
    background-color: #E4EFF8;
  }
`;

export default GlobalStyle;

