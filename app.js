const PORT = 3005;

const fs = require('fs').promises;
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
})