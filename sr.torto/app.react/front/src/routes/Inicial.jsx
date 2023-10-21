import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import axios from 'axios';
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

function findTokenJWT(){
  const allTokens = document.cookie.split(";");
  let tokenJWT;

  for(let i = 0; i < allTokens.length; i++){
    allTokens[i] = allTokens[i].split("=")
    if(allTokens[i].indexOf("token") !== -1 || allTokens[i].indexOf(" token") !== 1){
      tokenJWT = allTokens[i][1];
    }
  }

  const jwtData = jwtDecode(tokenJWT);
  return jwtData;
}

const Inicial = () => {
  const [tasks, setTasks] = useState([]);
  const [userNickname, setUserNickname] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const jwtData = findTokenJWT();
        const firstChar = jwtData.nickname.charAt(0).toUpperCase();
        setUserNickname(firstChar + jwtData.nickname.substring(1));
        
        const request = await axios.get('http://localhost:8800/task', {
          params: {
            user_id: jwtData.id_player
          }
        });
        
        const allUncompletedTasksData = request.data[0].filter(object => object.complete === 0);
        const taskTexts = allUncompletedTasksData.map(object => object.text);
        
        setTasks(taskTexts);
      } catch (error) {
        console.error('Erro ao decodificar o token JWT:', error);
      }
    }
    
    fetchData();
  }, []);

  return (
    <div>
      <h1>Bem vindo {userNickname}!</h1>
      {tasks.map((task, index) => (
        <div key={index}>
          {task}
        </div>
      ))}
    </div>
  )
}

export default Inicial