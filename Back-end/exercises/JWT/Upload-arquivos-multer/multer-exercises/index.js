require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const upload = require('./service/upload');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');
const multer = require('multer');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ping', controllers.ping);
app.post('/upload', middlewares.middlewareTypeFile,upload.single('file'), (req, res) => {
  console
  res.status(200).json({
    message: `O arquivo ${req.file.originalname} foi salvo com sucesso`
  })
})

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
