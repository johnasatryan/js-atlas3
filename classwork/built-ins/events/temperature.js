const EventEmitter = require('node:events');

class TemperatureSensor extends EventEmitter {
  constructor() {
    super();
    this.temperature = 0;
  }

  increaseTemperature() {
    this.temperature += Math.random();

    setInterval(() => {
      this.emit('checking-temperature');
    }, 1000);
  }

  function1() {
    console.log('function1');
  }

  function2() {
    console.log('function2');
  }
}

class Car extends EventEmitter {
  constructor() {
    super();
    this.speed = 100;
  }

  someMethod() {
    this.once('increase_speed', () => {
      this.speed += 10;
    });
  }
}

module.exports = { TemperatureSensor, Car };
