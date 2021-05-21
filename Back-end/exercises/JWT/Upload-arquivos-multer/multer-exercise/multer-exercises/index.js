require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const { upload, uploads, uploadsProfile } = require('./service/upload');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');



const app = express();
app.use(express.json())
app.use(express.static(`${__dirname}/service/uploads`));
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
app.post('/upload', upload.single('file'), (req, res) => {

  res.status(200).json({
    message: `O arquivo ${req.file.originalname} foi salvo com sucesso`
  })
})
app.use('/multiple', uploads.array('files'), (req, res) => {
  res.status(200).json(req.files.map((file) => {
    return {
      file: file.filename,
      url: `http://localhost:3000/${file.filename}`
    }
  }))
})

app.post('/profile', uploadsProfile.single('profilePic'), (req, res) => {
  const { file } = req
  const { name, email, bio } = req.body
  const profile = {
    id: file.filename,
    name,
    email,
    bio
  }
  const fileContent = fs.readFileSync('./profiles.json', 'utf-8')
  const fileFOrmated = [
    ...JSON.parse(fileContent),
    profile
  ]
  fs.writeFile('./profiles.json', JSON.stringify(fileFOrmated, null, ' '), (err) => {
    if (err) {
      throw err
    }
    console.log("salvo")
  })

  res.status(200).json(profile)

})

app.get('/profiles/:id',(req,res) => {
   const {id} = req.params;
   const fileContent = fs.readFileSync('./profiles.json', 'utf-8')
  const filesFormated = JSON.parse(fileContent)
   const filterFormated = filesFormated.find((item) =>  item.id === id)
   
   if(!filterFormated) return res.status(404).json(
    {
      "error": {
          "message": "Perfil não encontrado"
      }
  }
   )
  res.status(200).json(filterFormated)

})

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
