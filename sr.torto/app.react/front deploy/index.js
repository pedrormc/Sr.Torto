const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080");
});