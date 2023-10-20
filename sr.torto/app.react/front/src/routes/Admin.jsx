import styled from "styled-components";
import GlobalStyle from "../styles/Global";
import Form from "../components/Form.jsx";
import GridUser from "../components/GridUser";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import GridTask from "../components/GridTask";
import FormTask from "../components/FormTask";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  
`;
const Title = styled.h2``;

const Linha = styled.div`
width: 100%
border: solid black 4px;
`




function Admin() {

  const [users, setUsers,] = useState([]);
  const [onEdit, setOnEdit] = useState(null);
  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800/user");
      setUsers(res.data[0].sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };
  useEffect(() => {
    getUsers();
  }, [setUsers]);






  const [tasks, setTasks] = useState([]);
  //const [onEdit, setOnEdit] = useState(null);
  const getTasks = async () => {
    try {
      const res = await axios.get("http://localhost:8800/task");
      setTasks(res.data[0].sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };
  useEffect(() => {
    getTasks();
  }, [setTasks]);



    return (
    <>
      <Container>
      <Title>Quadro Admin</Title>

      <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
      <GridUser setOnEdit={setOnEdit} users={users} setUsers={setUsers} />

      

      <FormTask onEdit={onEdit} setOnEdit={setOnEdit} getTasks={getTasks}/>
      <GridTask setOnEdit={setOnEdit} tasks={tasks} setTasks={setTasks} />
      

      <ToastContainer autoClose={3000} position={toast.POSITION.TOP_CENTER} />

      </Container>
      <GlobalStyle />
        
    </>
  );
}

export default Admin