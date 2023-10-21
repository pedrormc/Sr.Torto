import { db } from "../db.js";
import crypto from "crypto";

export const getUsers = async (_, res) => {
  try {
    const rows = await db.query("SELECT * FROM users");
    const users = JSON.parse(rows); // Analisar a resposta do banco de dados como JSON
    res.status(200).json(users); // Enviar os dados analisados como resposta
  } catch (err) {
    res.status(500).send(err);
  }
};

export const addUser = async (req, res) => {
  const values = [
    req.body.nickname,
    req.body.email,
    req.body.senha,
  ];

  try {
    const [result] = await db.query("SELECT * FROM users WHERE email = ?", values[1]);
    if (result.length == 0) {
      const hashedPassword = hashPassword(values[2]); 

      const [rows] = await db.query("INSERT INTO users(nickname, email, senha) VALUES(?,?,?)", [
        values[0],
        values[1],
        hashedPassword,
      ]);

      res.status(200).json("Usuário criado com sucesso.");
    } else {
      res.send({ msg: "Email já cadastrado" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

export const updateUser = async (req, res) => {
  const values = [
    req.body.nickname,
    req.body.email,
    req.body.senha,
  ];

  try {
    const hashedPassword = hashPassword(values[2]); 

    const [rows] = await db.query("UPDATE users SET nickname = ?, email = ?, senha = ? WHERE id_player = ?", [
      values[0],
      values[1],
      hashedPassword,
      req.params.id,
    ]);
    res.status(200).json("Usuário atualizado com sucesso.");
  } catch (err) {
    res.status(500).send(err);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const [rows] = await db.query("DELETE FROM users WHERE id_player = ?", [req.params.id]);
    res.status(200).json("Usuário deletado com sucesso");
  } catch (err) {
    res.status(500).send(err);
  }
};

function hashPassword(password) {
  
  const hash = crypto.createHash("sha256");
  return hash.update(password).digest("hex");
}
