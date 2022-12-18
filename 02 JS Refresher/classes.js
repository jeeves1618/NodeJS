/*
                            C L A S S E S   I N   J A V A   S C R I P T
                            -------------------------------------------
*/
/*
            An object in Java Script can be created as below.
*/
let vwTaigun = {
  kerbWeight: 1260,
  engine: "1.5 Litres",
  power: 147.95,
  torque: "250 NM",
};

/*
            It can also be created out of a class blueprint as shown below
*/

const currentDate = new Date().toISOString();
console.log(currentDate);

/*
            What if I have multiple cars and store their values. Thats when you create a class
*/

class Car {
  constructor(kerbWeight, engine, power, torque) {
    this.kerbWeight = kerbWeight;
    this.engine = engine;
    this.power = power;
    this.torque = torque;
  }

  calcPowerPerTon() {
    console.log(
      `The power per BHP for a kerb weight of ${this.kerbWeight} is ${
        (this.power * 1000) / this.kerbWeight
      }`
    );
  }
}

const grandI10 = new Car(1100, "1.2Litres", 88, "67NM");
console.log(grandI10);
grandI10.calcPowerPerTon();
const altoK10 = new Car();
// console.log(altoK10);
// altoK10.kerbWeight = 830;
// altoK10.power = 65;
// console.log(altoK10);

// ARRAY DESTRUCTURING
const location = ["Tirunelveli", "Tamil Nadu", "India"];
const [city, state, country] = location;
console.log(city, state, country);

//OBJECT DESTRUCTURING
const { kerbWeight, engine: engineCapacoty, power, torque } = grandI10;
console.log(kerbWeight, engineCapacoty, power, torque);
