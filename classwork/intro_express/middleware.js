function expressSimulator() {
  const middlewareStack = [];
  return {
    middlewareStack,
    use(middleware) {
      middlewareStack.push(middleware);
    },
    get(path, handler) {
      middlewareStack.push((req, res, next) => {
        if (req.path === path) {
          handler(req, res);
        } else {
          next();
        }
      });
    },
    handleRequest(req, res) {
      let index = 0;

      function next() {
        if (index < middlewareStack.length) {
          const middleware = middlewareStack[index++];
          middleware(req, res, next);
        } else {
          res.end('404 Not Found');
        }
      }

      next();
    },
  };
}

const app = expressSimulator();

function fn(req, res, next) {
  console.log('first middleware');

  next();
}
app.use(fn);

app.get('/', (req, res) => {
  res.status(201).json({});
});

console.log(app.middlewareStack);
