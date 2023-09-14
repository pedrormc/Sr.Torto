import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

function FormTask ({ getTasks, onEdit, setOnEdit }){
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const task = ref.current;

      task.text.value = onEdit.text;
      task.id_player.value = onEdit.id_player;
      task.complete.value = onEdit.complete;
      
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const task = ref.current;

    if (
      !task.text.value ||
      !task.id_player.value ||
      !task.complete.value 
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/task" + onEdit.id, {
          text: task.text.value,
          id_player: task.id_player.value,
          complete: task.complete.value,
          
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800/task", {
          text: task.text.value,
          id_player: task.id_player.value,
          complete: task.complete.value,
          
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    task.text.value = "";
    task.id_player.value = "";
    task.complete.value = "";
    

    setOnEdit(null);
    getTasks();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>text</Label>
        <Input name="text" />
      </InputArea>
      <InputArea>
        <Label>iD Player</Label>
        <Input name="id_player" type="id_player" />
      </InputArea>
      <InputArea>
        <Label>complete</Label>
        <Input name="complete" />
      </InputArea>
      
      

      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
  };

  export default FormTask
