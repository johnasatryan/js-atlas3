const path = require('node:path');

console.log(path.resolve(__dirname, path.normalize('../path'), 'file.jpg'));
