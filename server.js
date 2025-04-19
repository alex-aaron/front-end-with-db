const express = require('express');
const app = express();
const port = 3000;
const path = require("node:path");
const mongoose = require('mongoose');
const Movie = require('./models/movie');

app.set('view engine', 'ejs');
app.use(express.urlencoded( { extended: false }));

mongoose.connect(
  'mongodb+srv://mrwigand:SaveMedicare1894@movies.ihobit7.mongodb.net/?retryWrites=true&w=majority&appName=movies')
  .then(() => console.log('Connected to database'))
  .catch((err) => {
    console.log('Connection failed');
});

app.get('/', (req, res) => {
  // res.sendFile(__dirname + "/views/index.html");
  res.render('index');
});

app.post('/', (req, res) => {

  const movie = new Movie({
    title: req.body.title,
    director: req.body.director,
    year: req.body.year,
    watched: req.body.watched,
    platform: req.body.platform
  })
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
