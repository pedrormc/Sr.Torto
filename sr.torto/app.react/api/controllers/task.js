import { db } from "../db.js";

export const getTasks = async (req, res) => {
  const user_id = req.query.user_id

  try{
    let rows;
    if(user_id) rows = await db.query("SELECT * FROM tasks WHERE user_id = ?", [user_id]);
    else rows = await db.query("SELECT * FROM tasks");
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
    req.body.user_id
  ];

  try{
    const [rows] = await db.query("INSERT INTO tasks(`text`, `id_player`, `complete`, `user_id`) VALUES(?)", [values]);
    res.status(200).json("Task adicionada com sucesso.");
  }
  catch (err){
    if(err.sqlState == 23000) res.send("User_id não corresponde a um id_player")
    else res.status(500).send(err);
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