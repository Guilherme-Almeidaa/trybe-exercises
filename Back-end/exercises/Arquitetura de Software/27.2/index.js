require('dotenv').config();

const express = require('express');
const andresses = require('./controllers/getAndress')
const statistics = require('./controllers/statistics')
const app = express();
app.use(express.json());

app.get('/lookup',andresses.getAndress);
app.get('/statistic',statistics.getStatistics)


const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));