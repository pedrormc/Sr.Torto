import { db } from "../db.js";

export const getTasks = (_, res) => {
  const q = "SELECT * FROM tasks";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addTask = (req, res) => {
  const q =
    "INSERT INTO tasks(`text`, `id_player`, `complete`) VALUES(?)";

  const values = [
    req.body.text,
    req.body.id_player,
    req.body.complete,
    
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Task adicionada com sucesso.");
  });
};

export const updateTask = (req, res) => {
  const q =
    "UPDATE tasks SET `text` = ?, `id_player` = ?, `complete` = ? WHERE `id` = ?";

  const values = [
    req.body.text,
    req.body.id_player,
    req.body.complete,
   
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Task atualizada com sucesso.");
  });
};

export const deleteTask = (req, res) => {
  const q = "DELETE FROM tasks WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Task deletada com sucesso.");
  });
};