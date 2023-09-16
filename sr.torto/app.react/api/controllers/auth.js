import { db } from "../db.js";
import bcrypt from "bcrypt";




export const login = (req, res) => {
  const email = req.body.email;
  const senha1 = req.body.senha;

  db.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
    console.log(`${result[0].senha}`)
    console.log(`${senha1}`)



    //   if (err) {
  //     res.send(err);
  //   }
  //   if (result.length > 0) {
  //     bcrypt.compare(senha1, result[0].senha, (error, response) => {
  //       if (error) {
  //         res.send(error);
  //       }
  //       if (response) {
  //         res.send({ msg: "Usuário logado" });
  //       } else {
  //         res.send({ msg: "Senha do seu cu" });
  //         console.log(`${result[0].senha}`)
  //       }
  //     });
  //   } else {
  //     res.send({ msg: "Usuário não registrado!" });
  //   }
   });
};