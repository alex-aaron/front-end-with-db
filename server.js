const express = require('express');
const app = express();
const port = 3000;
const path = require("node:path");
const mongoose = require('mongoose');


app.get('/', (req, res) => {
  console.log(__dirname + "/views/index.html");
  res.sendFile(__dirname + "/views/index.html");
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