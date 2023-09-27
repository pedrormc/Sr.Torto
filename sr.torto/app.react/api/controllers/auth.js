import { db } from "../db.js";
import bcrypt from "bcrypt";
const saltRounds = 10;



export const register = (req, res) => {

  const nickname = req.body.nickname;
  const email = req.body.email;
  const senha = req.body.senha;

  db.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result.length == 0) {
      bcrypt.hash(senha, saltRounds, (err, hash) => {
        db.query(
          "INSERT INTO users(`nickname`, `email`, `senha`) VALUES(?)",
          [nickname, email, hash],
          (error, response) => {
            if (err) {
              res.send(err);
            }

            res.send({ msg: "Usuário cadastrado com sucesso" });
          }
        );
      });
    } else {
      res.send({ msg: "Email já cadastrado" });
    }
  });
};


export const login = (req, res) => {
  const email = req.body.email;
  const senha = req.body.senha;

  db.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result.length > 0) {
      bcrypt.compare(senha, result[0].senha, (error, response) => {
        if (error) {
          res.send(error);
        }
        if (response) {
          res.send({ msg: "Usuário logado" });
          
        } else {
          res.send({ msg: "Senha incorreta" });
        }
      });
    } else {
      res.send({ msg: "Usuário não registrado!" });
    }
  });
};

