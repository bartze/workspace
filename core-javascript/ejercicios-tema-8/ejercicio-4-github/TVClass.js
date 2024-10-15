// Classes
// class Persona {
// 	constructor(nombre, edad) {
// 		this.nombre = nombre;
// 		this.edad = edad;
// 	}
// 	saludar() {
// 		console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
// 	}
// }
// const persona1 = new Persona('Juan', 30);
// persona1.saludar();

// 1) Create a TV class with properties like brand, channel and volume.
//  Specify brand in a constructor parameter.
//  Channel should be 1 by default. Volume should be 50 by default.
// 2) Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
// 3) Add a method to set the channel.
//  Let's say the TV has only 50 channels so if you try to set channel 60 the TV will stay at the current channel.
// 4) Add a method to reset TV so it goes back to channel 1 and volume 50.
// (Hint: consider using it from the constructor).
// 5) It's useful to write a status, that returns info about the TV status
//  like: "Panasonic at channel 8, volume 75".

class TV {
  constructor(brand, channel = 1, volume = 50) {
    this.brand = brand;
    this.resetTV();
    this.setChannel(channel);
    this.volume = volume;
  }

  volumePlus() {
    if (this.volume < 100) {
      this.volume++;
    }
  }

  volumeMinus() {
    if (this.volume > 0) {
      this.volume--;
    }
  }

  setChannel(channel) {
    if (channel > 0 && channel <= 50) {
      this.channel = channel;
    } else {
      console.log('No existe el canal seleccionado, volvemos al anterior');
    }
  }

  resetTV() {
    this.channel = 1;
    this.volume = 50;
  }

  showStatus() {
    console.log(`${this.brand} en el canal ${this.channel}, volumen ${this.volume}`);
  }
}

const TV1 = new TV('Panasonic', 8, 75);
TV1.showStatus();

const TV2 = new TV('Sony');
TV2.showStatus();

module.exports = { TV };
