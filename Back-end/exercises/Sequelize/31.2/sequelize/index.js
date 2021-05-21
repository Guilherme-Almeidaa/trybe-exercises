const express = require('express');
const Book = require('./controllers/BookController')
const app = express();

const PORT = 3000;

app.use(express.json());

app.use('/books', Book);

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))