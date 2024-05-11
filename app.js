const PORT = 3005;

const fs = require('fs').promises;
const express = require('express');

const app = express();

app.get('/', async (req, res) => {
  const data = await fs.readFile("./public/index.html", "utf-8");
  res.header('Content-Type', "text/html");
  res.send(data);
})

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
})