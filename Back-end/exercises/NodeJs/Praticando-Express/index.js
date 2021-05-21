const express = require('express');
const app = express();
const posts = require('./routes/posts');
const login = require('./routes/login');
const btc = require('./routes/btc');
const calculator = require('./routes/calculator');
const recipes = require('./routes/recipe');
const comments = require('./routes/comments');
const users = require('./routes/users')
const middlewares = require('./middlewares');

app.use(express.json());


app.use(middlewares.log);

app.use('/posts', posts);
app.use('/login', login);
app.use('/btc/price', btc);
app.use('/', calculator)
app.use('/recipe', recipes);
app.use('/comments',comments);
app.use('/users',users)



app.use(middlewares.error)

app.listen(3000, () => {
    console.log('Porta 3000')
})
