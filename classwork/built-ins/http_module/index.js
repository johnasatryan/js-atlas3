const http = require('node:http');
const PORT = 3001;

let users = [];

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === 'POST' && url === '/users') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        const { name, age, email } = JSON.parse(body);
        if (!name || !age || !email) {
          res.writeHead(400);

          return res.end(
            JSON.stringify({ message: 'Email, name or age required...' })
          );
        }
        const newUser = { id: users.length + 1, name, age, email };
        users.push(newUser);

        // res.setHeader('Content-type', 'application/json');
        // res.setHeader('custom-header', 'value');
        res.writeHead(201, {
          'Content-type': 'application/json',
        });
        res.write(JSON.stringify({ message: 'User created successfully' }));
        res.end();
      } catch (err) {
        res.writeHead(400);
        return res.end(JSON.stringify({ message: 'Something went wrong' }));
      }
    });
  } else if (method === 'GET' && url.startsWith('/users')) {
    console.log(url);
    res.writeHead(200, { 'Content-type': 'application/json' });

    res.write(JSON.stringify(users));
    res.end();
  } else if (method === 'PUT' && url.startsWith('/users')) {
    const currentId = +url.split('/')[2];

    const indexOfUser = users.findIndex((u) => u.id === currentId);

    if (indexOfUser === -1) {
      res.setHeader('Content-type', 'application/json');
      res.writeHead(404);
      return res.end(JSON.stringify({ message: 'User not found hargelis' }));
    }
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const updatedData = JSON.parse(body);
      users[indexOfUser] = { ...users[indexOfUser], ...updatedData };

      res.writeHead(200, {
        'Content-type': 'application/json',
      });

      res.end(JSON.stringify(users[indexOfUser]));
    });
  }

  // res.writeHead(200);
  // res.end(JSON.stringify({ message: 'Home directory' }));
});

server.listen(PORT, () => {
  console.log(`Server is runing on port: ${PORT}`);
});
