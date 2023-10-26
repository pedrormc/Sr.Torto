import { db } from "../db.js";
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

export const register = async (req, res) => {
  const { nickname, email, senha } = req.body;

  try {
    const [result] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
    if (result.length === 0) {
      const hashedPassword = hashPassword(senha);
      const [rows] = await db.query("INSERT INTO USERS(nickname, email, senha) VALUES(?, ?, ?)", [nickname, email, hashedPassword]);
      res.send({ msg: "Usuário cadastrado com sucesso" });
    } else {
      res.send({ msg: "Email já cadastrado" });
    }
  } catch (err) {
    res.send(err);
  }
};

export const login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const [result] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
    if (result.length > 0) {
      const compare = comparePassword(senha, result[0].senha);
      if (compare) {
        const token = jwt.sign(result[0], "TOKEN_SECRET");
        res.send({
          authorized: true,
          msg: "Usuário logado",
          accessToken: token
        })
        res.status(200).json("Usuário deletado com sucesso");
      } else {
        res.send({ msg: "Senha incorreta" });
      }
    } else {
      res.send({ msg: "Usuário não registrado" });
    }
  } catch (err) {
    res.send(err);
  }
};

function hashPassword(password) {
  
  const hash = crypto.createHash("sha256");
  return hash.update(password).digest("hex");
}

function comparePassword(inputPassword, hashedPassword) {
  
  const inputHash = hashPassword(inputPassword);
  return inputHash === hashedPassword;
}


