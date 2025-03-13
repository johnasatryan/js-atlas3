const express = require('express');

const app = express();

const authMiddleware = (req, res, next) => {
  const authCode = req.headers['authorization'];
  console.log(authCode);
  if (!authCode) {
    res.setHeader('WWW-Authenticate', 'Basic realm=hello');
    res.status(401).send('Unauthorized');
    return;
  }
  console.log(authCode);
  next();
};

app.get('/', authMiddleware, (req, res) => {
  res.send('<h1> Hello to protected Route..</h1>');
});
app.listen(3001, () => {
  console.log('Server runing at port 3001');
});
