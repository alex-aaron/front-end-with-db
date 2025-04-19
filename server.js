const express = require('express');
const app = express();
const port = 3000;
const path = require("node:path");
const mongoose = require('mongoose');

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  // res.sendFile(__dirname + "/views/index.html");
  res.render('index');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

mongoose.connect(
  'mongodb+srv://mrwigand:SaveMedicare1894@movies.ihobit7.mongodb.net/?retryWrites=true&w=majority&appName=movies')
  .then(() => console.log('Connected to database'))
  .catch((err) => {
    console.log('Connection failed');
});