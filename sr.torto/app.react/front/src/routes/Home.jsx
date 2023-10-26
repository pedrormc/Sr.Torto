import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { FaTrash, FaEdit } from "react-icons/fa";
import Form from 'react-bootstrap/Form';
import CheckboxList from "../components/CheckboxList";


const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  word-break: break-all;
`;
const Check = styled.input`
margin: 0;
padding: 0;
border: 0;
`

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
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

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [tasksID, setTasksID] = useState([]);
  const [userNickname, setUserNickname] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const jwtData = findTokenJWT();
        const firstChar = jwtData.nickname.charAt(0).toUpperCase();
        setUserNickname(firstChar + jwtData.nickname.substring(1));
        
        const request = await axios.get('https://api-c0ie.onrender.com/task', {
          params: {
            user_id: jwtData.id_player
          }
        });
        
        const allUncompletedTasksData = request.data[0].filter(object => object.complete === 0);
        const taskIDs = request.data[0].map(object => object.id_task);
        const taskTexts = allUncompletedTasksData.map(object => object.text);

        setTasksID(taskIDs);
        setTasks(taskTexts);
      } catch (error) {
        console.error('Erro ao decodificar o token JWT:', error);
      }
    }
    
    fetchData();
  }, []);

  const [taskStatus, setTaskStatus] = useState(Array(tasks.length).fill(false));

  const handleCheckboxToggle = (index) => {
    const newTaskStatus = taskStatus;
    newTaskStatus[index] = !newTaskStatus[index];
    setTaskStatus(newTaskStatus);
  };

  const deleteTask = async (taskIndex) => {
    const confirm = window.confirm("Você deseja marcar essa task como concluída?")
    if(confirm) {
      handleCheckboxToggle(taskIndex);
      try {
        const id_task = tasksID[taskIndex];
        const request = await axios.patch(`https://api-c0ie.onrender.com/task/${id_task}`);
        const updatedTasks = tasks.filter((_, index) => index !== taskIndex);
        setTasks(updatedTasks);
      } catch (err) {
        console.error(err);
      }
    }
  }

  return (
    <div>
      <h1 >Bem vindo {userNickname}!</h1>
      <Table>
      {tasks.map((task, index) => (
        <div key={index}>
          <Check
            type="checkbox"
            checked={taskStatus[index]}
            onChange={() => {
              deleteTask(index)
            }}
          />
          {task}
        </div>
      ))}
      </Table>
      <Table>
      <Tbody>
        {tasks.map((task, index) => (
          <Tr key={index}>
            <Td width="30%">{task}</Td>
            
            <Td width="20%" onlyWeb>
              {task.complete}
            </Td>
            <input
            type="checkbox"
            checked={taskStatus[index]}
            onChange={() => {
            deleteTask(index)
            }}
          />
            
          </Tr>
        ))}
      </Tbody>
      </Table>
      
    </div>
  )
}

export default Home