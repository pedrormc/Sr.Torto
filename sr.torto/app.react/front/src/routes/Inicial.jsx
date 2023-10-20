import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import jwtDecode from 'jwt-decode';

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  
`;

const Inicial = () => {
  let userNickname;
  try {
    const allTokens = document.cookie.split(";");
    let tokenJWT;

    for(let i = 0; i < allTokens.length; i++){
      allTokens[i] = allTokens[i].split("=")
      if(allTokens[i].indexOf("token") !== -1 || allTokens[i].indexOf(" token") !== 1){
        tokenJWT = allTokens[i][1];
      }
    }

    const jwtData = jwtDecode(tokenJWT);
    const firstChar = jwtData.nickname.charAt(0).toUpperCase();
    userNickname = firstChar + jwtData.nickname.substring(1);

  } catch (error) {
    console.error('Erro ao decodificar o token JWT:', error);
  }

  return (
    <div>
      <h1>Bem vindo {userNickname}!</h1>
    </div>
  )
}

export default Inicial