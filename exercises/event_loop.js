const fs = require('node:fs');

// console.log('Synchronous start');
// fs.open(__filename, (err, fd) => {
//   console.log('FIle opened');
//   console.log(fd);

//   fs.close((20), () => {
//     console.log('file closed');
//   });
// });

// new Promise((resolve, reject) => {
//   resolve('Promise queue');
// }).then((message) => {
//   console.log(message);
// });

// process.nextTick(() => {
//   console.log('nextTick queue');
// });

// setTimeout(() => {
//   console.log('Timer queue');
//   process.nextTick(() => {
//     console.log('next tick queue 2');
//   });
// }, 0);

// fs.readFile(__filename, () => {
//   console.log('I/O queue');
// });

// setImmediate(() => {
//   console.log('Immediate');
// });
// console.log('Synchronous end');

setTimeout(() => {
  console.log('timeout');
}, 10);

setImmediate(() => {
  console.log('Immediate');
});

fs.readFile(__filename, () => {
  console.log('file reading');
});
