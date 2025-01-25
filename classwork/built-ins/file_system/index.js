const fs = require('node:fs');

// const fileHandler = (file_path) => {
//   try {
//     const data = fs.readFileSync(file_path);
//     return data;
//   } catch (err) {
//     fs.writeFileSync(file_path, '');
//     return '';
//   }
// };

// const data = fileHandler('./file.txt');

// fs.writeFileSync('file.txt', 'Hello world');

// const another_data = fs.readFileSync('file.txt', 'utf-8');

// console.log(another_data);

// fs.writeFileSync('file.txt', ' another info', { flag: 'a' });

// console.log(fs.readFileSync('file.txt', 'utf-8'));

console.log('start');

fs.writeFile('file.txt', 'async data', (err, data) => {
  if (err) {
    console.log(err);
  }
});

fs.readFile('file.txt', 'utf-8', (err, data) => {
  if (err) {
  }
  console.log(data);
});

console.log('end');
