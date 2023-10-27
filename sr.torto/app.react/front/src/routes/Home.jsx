import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { FaTrash, FaEdit } from "react-icons/fa";
import Form from 'react-bootstrap/Form';
import CheckboxList from "../components/CheckboxList";
import { Link } from 'react-router-dom';


const DivTask = styled.div`
width: 300px;
margin:0px;
padding-top: 7px;
font-size: 19px;
`

const Ul  = styled.ul`

`

const Li = styled.li`
float: right;







& :hover{
  background-color: #99b3bd;
    color: #000000;
    border-bottom: solid 8px #000000;
    
    
    
}
a {
  
  display: block;
    color: rgb(0, 0, 0);
    text-align: center;
    padding: 18px 30px;
    margin: 0px;
    padding-top: 45px;
    padding-bottom: 45px;
    text-decoration: none;
    border-bottom: solid 8px #6D8F9B;
    font-size: 22px;
    

};`









const H1 = styled.h1`
color: aliceblue;
text-align: center;
position: relative;
top: -100px;
`
const H2 = styled.h2`
color: #000000;
margin: 0px 50px;
margin-bottom: solid 5px black;
`

const Bloquin= styled.div`
display: flex;
padding: 20px 20px 20px 20px;
border-bottom: solid 1px black;
`

const Bloquin2= styled.div`
padding: 20px 0px;
margin: 0;
border: 0;
border-bottom: solid 5px black;

`
const BlocoMain = styled.div`
display:flex;
padding: 0;
border: 0;
margin: 0;
width: 100%;
`


const Table = styled.table`
  width: 580px;
  background-color: #fff;
  padding: 0px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px 200px;
  word-break: break-all;
`;
const Check = styled.input`
margin: 0px 20px 0px 170px ;



height: 40px;

width: 70px;
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
  const [taskStatus, setTaskStatus] = useState([]);

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
        setTaskStatus(Array(taskTexts.length).fill(false));
      } catch (error) {
        console.error('Erro ao decodificar o token JWT:', error);
      }
    }
    
    fetchData();
  }, []);

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
      <H1 >Olá {userNickname}!</H1>
      <BlocoMain>
      <Table>
        <Bloquin2>
        <H2>ESSAS SÃO SUAS TEREFAS DIÁRIAS</H2>
        </Bloquin2>
      {tasks.map((task, index) => (
        <Bloquin key={index}>
           <DivTask>{task}</DivTask>
          <Check
            type="checkbox"
            checked={taskStatus[index]}
            onChange={() => {
              deleteTask(index)
            }}
          />
         
          
        </Bloquin>
      ))}
      </Table>

      <Table>
        <Bloquin2>
        <H2>COMO ESTÁ SE SENTINDO HOJE?</H2>
        </Bloquin2>
      
        <Bloquin><Link to="/casco">Casco</Link></Bloquin>
        <Bloquin><Link to="/casco">Casco</Link></Bloquin>
        <Bloquin><Link to="/casco">Casco</Link></Bloquin>
        <Bloquin><Link to="/casco">Casco</Link></Bloquin>
      
      </Table>
      </BlocoMain>
      
      
    </div>
  )
}

export default Home