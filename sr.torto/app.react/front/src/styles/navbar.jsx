import { createGlobalStyle } from "styled-components";

const Navbara = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    font-family: 'poppins', sans-serif;
    
  }
  
  container-principal {
    font-family: 'verdana'; color:#777;}

body{
    background-color: #777;
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

  
  #divBusca{
    
    position: absolute;
    z-index: 1;
    left: 500px;
    top: 50px;
  }
  
  #txtBusca{
    float:left;
    background-color:transparent;
    padding-left:5px;
    font-size:18px;
    border:none;
    height:32px;
    width:433px;
  }
  
  #btnBusca{
    border:none;
    position:relative;
    left: 0px;
    height:32px;
    border-radius:0 7px 7px 0;
    color: #000000;
    width:60px;
    font-weight:bold;
    background:#ff8c00;
    
    color: #000000;
    }
    #bntBusca a:hover {
      background-color: #111;
      color: #E0EEEE;
      border-bottom: #ff8c00;
  
    }
  
  .droperfil{
    position: absolute;
    z-index: 1;
    left: 87%;
    top: 50px ;
  }

  .container-fluid{
    width: 900px;
  }
`;

export default Navbara;

