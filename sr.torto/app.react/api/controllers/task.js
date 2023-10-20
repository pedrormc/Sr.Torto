import { db } from "../db.js";

export const getTasks = async (_, res) => {
  try{
    const rows = await db.query("SELECT * FROM tasks");
    res.status(200).json(rows);
  }
  catch (err){
    res.status(500).send(err);
  }
};

export const addTask = async (req, res) => {
  const values = [
    req.body.text,
    req.body.id_player,
    req.body.complete,
  ];

  try{
    const [rows] = await db.query("INSERT INTO tasks(`text`, `id_player`, `complete`) VALUES(?, ?, ?)", [values]);
    res.status(200).json("Task adicionada com sucesso.");
  }
  catch (err){
    res.status(500).send(err);
  }
};

export const updateTask = async (req, res) => {
  const values = [
    req.body.text,
    req.body.id_player,
    req.body.complete,
   
  ];

  try{
    const [rows] = await db.query("UPDATE tasks SET `text` = ?, `id_player` = ?, `complete` = ? WHERE `id_task` = ?", [...values, req.params.id]);
    res.status(200).json("Task atualizada com sucesso.");
  } 
  catch (err){
    res.status(500).send(err);
  }
};

export const deleteTask = async (req, res) => {
  try{
    const [rows] = await db.query("DELETE FROM tasks WHERE `id_task` = ?", [req.params.id]);
    res.status(200).json("Task deletada com sucesso.");
  }
  catch (err){
    res.status(500).send(err);
  }
  
};