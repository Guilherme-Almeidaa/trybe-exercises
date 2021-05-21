const express = require('express')
const app = express();
const users = require('./routes/users')

const PORT = 3001;

app.use(express.json());

app.use('/user',users)

app.listen(PORT,() => {console.log(`Rodando na porta ${PORT}`)})
