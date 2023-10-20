import { db } from "../db.js";
import bcrypt from "bcrypt";
const saltRounds = 10;

export const getUsers = async (_, res) => {
  try{
    const rows = await db.query("SELECT * FROM users");
    res.status(200).json(rows);
  }
  catch (err){
    res.status(500).send(err);
  }
};

export const addUser = async (req, res) => {
  const values = [
    req.body.nickname,
    req.body.email,
    req.body.senha,
    
  ];

  try{
    const [result] = await db.query("SELECT * FROM users WHERE email = ?", values[1]);
    if (result.length == 0) {
      const hashedPassword = bcrypt.hash(values[2], saltRounds)

      const [rows] = await db.query("INSERT INTO users(nickname, email, senha) VALUES(?,?,?)", [values[0],values[1], hash]);

      res.status(200).json("Usuário criado com sucesso.");
    } else {
      res.send({ msg: "Email já cadastrado" });
    }
  }
  catch (err){
    res.status(500).send(err);
  }
};

//   db.query(qd, [values], (err) => {
//     if (err) return res.json(err);

//     return res.status(200).json("Usuário criado com sucesso.");
//   });




export const updateUser = async (req, res) => {
  const values = [
    req.body.nickname,
    req.body.email,
    req.body.senha,
   
  ];

  try{
    const [rows] = await db.query("UPDATE users SET nickname = ?, email = ?, senha = ? WHERE id_player = ?", [...values, req.params.id]);
    res.status(200).json("Usuário atualizado com sucesso.");
  }
  catch (err){
    res.status(500).send(err);
  }
};

export const deleteUser = async (req, res) => {
  try{
    const [rows] = await db.query("DELETE FROM users WHERE id_player = ?", [req.params.id]);
    res.status(200).json("Usuário deletado com sucesso");
  }
  catch (err){
    res.status(500).send(err);
  }
};