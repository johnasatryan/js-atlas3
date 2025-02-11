const express = require('express');

const app = express();
const bodyParser = require('body-parser');
// console.log(typeof app);
require('dotenv').config();
const PORT = process.env.PORT;
// console.log(Object.keys(app));
// console.log(app.getMaxListeners());

// app.on('some', (message) => {
//   console.log(message);
// });

// app.emit('some', 'hello express');

// app.use(express.json());

function fn(req, res, next) {
  console.log('first middleware');
  // res.status(200).send('something');
  next();
}

app.use(fn);

app.get('/', (req, res) => {
  console.log('get handler');
  res.status(200).send('hello world');
});

app.get('/', (req, res) => {
  console.log('get handler');
  res.status(200).send('hello another getter');
});

// app.post('/', (req, res) => {
//   console.log(req.headers);
//   req.on('data', (chunk) => {
//     req.body = chunk.toString();
//   });

//   req.on('end', () => {
//     req.body = JSON.parse(req.body);
//   });
//   res.status(201).json({ message: 'Created successfully' });
// });

app.get('/users', (req, res) => {
  res.status(200).json({ message: 'users' });
});
app.post('/', (req, res) => {
  console.log('post request');
  res.status(201).json({ message: 'created' });
});
app.listen(PORT, () => {
  console.log(`Server is runinng on port: ${PORT}`);
});
