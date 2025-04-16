const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  console.log('Hello World');
  res.send("<h1>Hello</h1>")
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});