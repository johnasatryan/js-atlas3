// // class Singleton {
// //   static _instance;

// //   constructor() {
// //     if (Singleton._instance) return Singleton._instance;
// //     Singleton._instance = this;
// //     return this;
// //   }
// // }

// // const instance1 = new Singleton();
// // const instance2 = new Singleton();

// // console.log(instance1 === instance2); //

// // class TransportFactory {
// //   createTransport(type) {
// //     switch (type) {
// //       case 'truck':
// //         return new Truck();
// //       case 'ship':
// //         return new Ship();

// //       case 'plain':
// //         return new Plain();

// //       default:
// //         throw new Error('Invalid type');
// //     }
// //   }
// // }

// // class Truck {
// //   deliver() {
// //     return 'Land delivery';
// //   }
// // }

// // class Ship {
// //   deliver() {
// //     return 'Sea delivery';
// //   }
// // }

// // Abstract class
// class Logistics {
//   planDelivery() {
//     const transport = this.createTransport();

//     return `Planning ${transport.deliver()}`;
//   }

//   // Factory method (to be implemented by subclasses)
//   createTransport() {
//     throw new Error('createTransport() must be implemented');
//   }
// }

// class TruckLogistics extends Logistics {
//   createTransport() {
//     return new Truck();
//   }
// }

// class ShipLogistics extends Logistics {
//   createTransport() {
//     return new Ship();
//   }
// }

// class Transport {
//   deliver() {
//     throw new Error('deliver() must be implemented');
//   }
// }

// class Truck extends Transport {
//   deliver() {
//     return 'land transportation';
//   }
// }

// class Ship extends Transport {
//   deliver() {
//     return 'sea transportation';
//   }
// }

// class Plane {
//   deliver() {
//     return 'air transportation';
//   }
// }

// const truckLogistics = new TruckLogistics();
// console.log(truckLogistics.planDelivery());

class BasicTVRemote {
  constructor() {
    this.device = new TV();
  }

  powerOn() {
    this.device.turnOn();
  }

  volumeUp() {
    this.device.increaseVolume(10);
  }
}

class AdvancedTVRemote {
  constructor() {
    this.device = new TV();
  }

  powerOn() {
    this.device.turnOn();
  }
  mute() {
    this.device.setVolume(0);
  }
}

class BasicRadioRemote {
  constructor() {
    this.device = new Radio();
  }
  powerOn() {
    this.device.start();
  }

  volumeUp() {
    this.device.increaseVolume(10);
  }
}

class TV {
  turnOn() {
    // TV specific logic
  }

  increaseVolume(amount) {
    //
  }

  setVolume(level) {
    //
  }
}

class Radio {
  start() {
    //
  }
  increaseVolume(amount) {}
}

class Device {
  enable() {
    throw new Error('method must be implemented');
  }
}

class TV extends Device {
  enable() {
    console.log('Turning on TV');
  }
  adjustVolume(percent) {
    console.log(`Setting TV volume to ${percent}%`);
  }
}

class Radio extends Device {
  enable() {
    console.log('Turning on Radio');
  }
  adjustVolume(steps) {
    console.log(`Increasingradio volume by ${steps} steps`);
  }
}

class Remote {
  constructor(device) {
    this.device = device;
  }

  powerOn() {
    this.device.enable();
  }

  volumeUp(amount) {
    this.device.adjustVolume(amount);
  }
}

class AdvancedTVRemote extends Remote {
  mute() {
    this.device.adjustVolume(0);
  }

  setChannel(number) {
    console.log('Channel set to ...');
  }
}
