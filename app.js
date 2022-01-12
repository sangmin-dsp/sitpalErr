const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

// POSTMAN 실행 할 때, 연결 위해 필요
app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute)


//ROUTES
app.get('/', (req, res) => {
  res.send('We are on home');
});

//Connet to DB
mongoose.connect( process.env.DB_CONNECTION, () => {
  console.log('connected to DB !')
})


app.listen(3000);