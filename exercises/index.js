// Thread Pool
// Event Loop

const crypto = require('node:crypto');

// crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
// crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
// crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
// crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
// process.env.UV_THREADPOOL_SIZE = 16;
const start = Date.now();

// for (let i = 0; i < 4; ++i) {
//   crypto.pbkdf2('password', 'salt', 1000000, 512, 'sha512', (err, hash) => {
//     console.log(Date.now() - start);
//   });
// }
// const https = require('https');

// for (let i = 0; i < 150; ++i) {
//   https
//     .request('https://google.com', (res) => {
//       res.on('data', () => {});
//       res.on('end', () => {
//         console.log(`Request ${i + 1}`, Date.now() - start);
//       });
//     })
//     .end();
// }
