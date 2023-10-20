import { db } from "../db.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
const saltRounds = 10;



export const register = async (req, res) => {

  const { nickname, email, senha } = req.body;

  try{
    const [result] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
    if (result.length === 0) {
      const hashedPassword = await bcrypt.hash(senha, saltRounds);
      const [rows] = await db.query("INSERT INTO USERS(nickname, email, senha) VALUES(?, ?, ?)", [nickname, email, hashedPassword]);
      res.send({ msg: "Usuário cadastrado com sucesso" });
    } else {
      res.send({ msg: "Email já cadastrado" });
    }
  } 
  catch (err){
    res.send(err)
  }
};


export const login = async (req, res) => {
  const { email, senha } = req.body;

  try{
    const [result] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
    if (result.length > 0) {
      const compare = await bcrypt.compare(senha, result[0].senha);
      if (compare) {
        const token = jwt.sign(result[0], "TOKEN_SECRET");
        res.send({
            authorized: true,
            msg: "Usuário logado",
            accessToken: token
        });
      } else {
        res.send({ msg: "Senha incorreta "});
      }
    } else {
      res.send({ msg: "Usuário não registrado" });
    }
  } 
  catch (err){
    res.send(err);
  }
};

