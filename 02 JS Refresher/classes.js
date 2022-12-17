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
  power: "147.95 BHP",
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
}

const grandI10 = new Car(1100, "1.2Litres", "88BHP", "67NM");
console.log(grandI10);
