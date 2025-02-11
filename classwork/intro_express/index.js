const express = require('express');

const app = express();

app.use((req, res, next) => {
  req.x = 33;
  console.log('middleware: 1');
  next();
});

app.use((req, res, next) => {
  console.log(req.x);

  req.y = 22;
  console.log('middleware: 2');
  next();
});

app.get('/', (req, res) => {
  console.log(req.x);
  console.log(req.y);
  res.status(200).send('hello');
});
app.listen(3001, () => {
  console.log('Server is runing on PORT: 3001');
});
