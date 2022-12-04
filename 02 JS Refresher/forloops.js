"use strict";

let cars = [
  "Alto 800 Lxi",
  "Honda Civic Coupe LX",
  "Alto K10 Vxi",
  "Hyundai Grand i10",
  "VW Taigun 1.5 GT",
];

console.log(
  "-----------------------------Normal For Loop --------------------------------"
);
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}
console.log(
  "----------------------------- For of Loop -----------------------------------"
);
//used for Arrays
for (const anyName of cars) {
  console.log(anyName);
}

const vwTaigun = {
  engine: "1.5 Litres",
  power: "147.95 BHP",
  torque: "250 NM",
  kerbWeight: 1260,
  length: 4221,
  width: 1760,
  height: 1612,
};

console.log(
  "----------------------------- For in Loop -----------------------------------"
);
//used for Objects
for (const anyName in vwTaigun) {
  console.log(anyName + " : " + vwTaigun[anyName]);
  /*dot notation will not work here. If we use dot notation, 
  JS will look for a propery called anyname in the object*/
}
