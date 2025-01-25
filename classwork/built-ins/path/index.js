const path = require('node:path');

// const settings = require('./settings.json');

// console.log(settings.name);
console.log(__dirname);
console.log(__filename);
console.log(path.basename(__dirname));
console.log(path.basename(__filename));

console.log(path.extname(__dirname));
console.log(path.extname(__filename));

console.log(path.join('foler1', 'folder2', 'index.js'));
console.log(path.join('foler1', '//folder2', 'index.js'));
console.log(path.join('/foler1', '//folder2', 'index.js'));

console.log(path.join(__dirname, 'file.jpg'));
console.log(path.join(__dirname, 'public', 'some.txt'));

// console.log(path.isAbsolute('./file.jpg'));

// console.log(path.sep);


