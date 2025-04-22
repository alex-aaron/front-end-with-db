const express = require('express');
const app = express();
const port = 3000;
const path = require("node:path");
const mongoose = require('mongoose');
const Movie = require('./models/movie');

app.set('view engine', 'ejs');
app.use(express.json());
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

app.post('/', (req, resp) => {
  const title = req.body.title.split(" ").join("+");

  const apiResponse = async (inputTitle) => {
    try {
      await fetch(`http://www.omdbapi.com/?t=${inputTitle}&apikey=b8f921ba`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        resp.render('findMovie', {
          title: res.Title,
          director: res.Director,
          plot: res.Plot,
          country: res.Country,
          poster: res.Poster,
          year: res.Year
        });
      });
    } catch (e) {
      console.log(e);
    }
  };

  const response = apiResponse(title);
});

app.post('/movies', (req, res) => {
  console.log('hit this route');
  console.log(req.body);
  // const movie = new Movie({
  //   title: req.body.title,
  //   director: req.body.director,
  //   year: req.body.year,
  //   watched: req.body.watched,
  //   platform: req.body.platform
  // })
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
