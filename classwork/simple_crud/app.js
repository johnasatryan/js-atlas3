const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
require('dotenv').config();

// const envFile = path.join(__dirname, '.env');

// const envExtracted = fs.readFileSync(envFile, 'utf-8');

// const arr = envExtracted.split('\n');

// arr.forEach((val) => {
//   const [key, value] = val.split('=');

//   process.env[key] = value;
// });

const PORT = process.env.PORT;

const DATA_FILE = path.join(__dirname, 'users.json');

fs.access(DATA_FILE, fs.constants.F_OK, (err) => {
  if (err) {
    fs.writeFile(DATA_FILE, '[]', (err) => {});
  }
});

const writeUserData = (data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), (err) => {
      if (err) {
        resolve('Error');
      }
      resolve('success');
    });
  });
};

const readUserData = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(DATA_FILE, (err, data) => {
      if (err) {
        resolve(JSON.parse([]));
      }
      resolve(JSON.parse(data));
    });
  });
};

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/users') {
    readUserData().then((data) => {
      res.writeHead(200, { 'Content-type': 'application/json' });
      res.end(JSON.stringify(data));
    });
  } else if (req.method === 'POST' && req.url === '/users') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      const { username, password, email } = JSON.parse(body);

      if (!username || !password || !email) {
        res.writeHead(400, { 'Content-type': 'application/json' });
        return res.end(JSON.stringify({ message: 'Fields required' }));
      }

      readUserData().then((users) => {
        users.push({ id: users.length + 1, username, password, email });
        writeUserData(users).then((value) => {
          console.log(value);
          res.writeHead(201, { 'Content-type': 'application/json' });
          res.end(JSON.stringify({ message: 'User created successfully' }));
        });
      });
    });
  }
});

server.listen(PORT, () => {
  console.log(`Server is runing on port: ${PORT}`);
});
