import { db } from "../db.js";
import bcrypt from "bcrypt";
const saltRounds = 10;

export const getUsers = (_, res) => {
  const q = "SELECT * FROM users";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {

  const qc = 
    "SELECT * FROM users WHERE email = ?"

  const qd =
    "INSERT INTO users(`nickname`, `email`, `senha`) VALUES(?,?,?)";

  const values = [
    req.body.nickname,
    req.body.email,
    req.body.senha,
    
  ];
  db.query("SELECT * FROM users WHERE email = ?", values[1], (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result.length == 0) {
      bcrypt.hash(values[2], saltRounds, (err, hash) => {

        db.query(qd, [values[0],values[1], hash], (err) => {
          if (err) return res.json(err);
      
          return res.status(200).json("Usuário criado com sucesso.");
        });
      });
    } else {
      res.send({ msg: "Email já cadastrado" });
    }
  });
};

//   db.query(qd, [values], (err) => {
//     if (err) return res.json(err);

//     return res.status(200).json("Usuário criado com sucesso.");
//   });




export const updateUser = (req, res) => {
  const q =
    "UPDATE users SET `nickname` = ?, `email` = ?, `senha` = ? WHERE `id_player` = ?";

  const values = [
    req.body.nickname,
    req.body.email,
    req.body.senha,
   
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário atualizado com sucesso.");
  });
};

export const deleteUser = (req, res) => {
  const q = "DELETE FROM users WHERE `id_player` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário deletado com sucesso.");
  });
};