// const EventEmitter = require('node:events');

// // const emitter = new EventEmitter();

// // console.log('start event');
// // // emitter.on('pizza-making', () => {
// // //   setTimeout(() => console.log('make some pizza'), 10);
// // // });

// // // emitter.emit('pizza-making');
// // // emitter.emit('pizza-making');

// // emitter.on('some_listener', (arg) => {
// //   console.log(arg);
// // });

// // emitter.emit('some_listener', 23);
// // emitter.emit('some_listener', 23);
// // emitter.emit('another_emit');
// // console.log('end event');

// // console.log(emitter.eventNames());

// const { TemperatureSensor, Car } = require('./temperature');

// const tmp = new TemperatureSensor();

// // tmp.increaseTemperature();

// // tmp.on('checking-temperature', (args) => {
// //   if (args.length === 1) {
// //     tmp.function_1();
// //   } else {
// //     tmp.function2();
// //   }
// //   console.log(tmp.temperature);
// // });

// // const car = new Car();

// // car.someMethod();
// // car.emit('increase_speed');
// // car.emit('increase_speed');

// // console.log(car.speed);

const http = require('node:http');

const options = {};

// http.ClientRequest({}, (res) => {

// })

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let data = '';
    req.on('data', (chunk) => {
      data += chunk;
      console.log(data);
    });
    req.on('end', () => {
      console.log('close request');
    });
  }
  res.end('hello');

  // res.end('<button> click me</button> ');
});

server.listen(3001, () => {
  console.log(`Server is running on port: 3001`);
});
