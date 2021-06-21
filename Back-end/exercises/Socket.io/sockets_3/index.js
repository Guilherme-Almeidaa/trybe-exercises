const express = require('express');
const app = express();
const http = require('http').createServer(app);
const cors = require('cors');


const io = require('socket.io')(http,{
    cors:{
        origin:'http://localhost:3000',
        methods:['GET','POST'],
    }
})

app.use(cors());
require('./sockets/index')(io);
app.get('/' ,(req,res) => {
    res.sendFile(__dirname + '/public/index.html');
})
app.use(express.static(__dirname + '/public'));

http.listen(3000, () => {
    console.log('servidor rodando')
})
