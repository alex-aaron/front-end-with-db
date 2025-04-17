const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

app.get('/', (req, res) => {
  res.send("<h1>Hello</h1>")
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

mongoose.connect(
  'mongodb+srv://mrwigand:SaveMedicare1894@movies.2mzlyap.mongodb.net/Movie-Api?retryWrites=true&w=majority&appName=movies')
  .then(() => console.log('Connected to database'))
  .catch((err) => {
    console.log('Connection failed');
  })