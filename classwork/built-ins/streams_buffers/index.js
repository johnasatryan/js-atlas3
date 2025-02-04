//

const buffer = new Buffer.from('hello');

// console.log(Buffer);
// console.log(buffer.toString());

// buffer.write('another text');

// console.log(buffer.toString());

// Stream

const fs = require('node:fs');

// // const data = 'hello world';
// fs.writeFile('file.txt', data, (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

// let currentData = '';

// fs.readFile('file.txt', (err, data) => {
//   if (err) {
//     console.log(err);
//   }

//   fs.writeFile('file2.txt', data, (err) => {
//     if (err) {
//       console.log(err);
//     }
//   });
// });

// const writeStream = fs.createWriteStream('file.txt', {
//   flags: 'w',
//   start: 0,
//   autoClose: true,
//   encoding: null,
//   // highWaterMark: 2,
// });

// writeStream.write('hello world', (err) => {});
// writeStream.end();

// // writeStream.write('another text', (err) => {});
// const readStream = fs.createReadStream('file.txt', {
//   flags: 'r',
//   start: 3,
//   autoClose: true,
//   encoding: null,
//   end: 5,
//   // highWaterMark: 2,
// });

// let data = '';
// readStream.on('data', (chunk) => {
//   console.log(chunk.toString());
// });

// readStream.on('close');

const { Duplex } = require('stream');

const duplexStream = new Duplex({
  write(chunk, encoding, callback) {
    console.log(chunk);
    this.chunk = chunk;

    callback();
  },

  read(size) {
    this.push(this.chunk);
  },
});

duplexStream.write('hello world');
duplexStream.write('another world');
duplexStream.end();
duplexStream.on('data', (chunk) => {
  console.log(chunk.toString());
});

duplexStream.on('end', () => {});

// console.log(duplexStream.read());

const { Transform } = require('stream');

const { gzip } = require('zlib');
