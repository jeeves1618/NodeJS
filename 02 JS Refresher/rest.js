"use strict";
/*
Rest operator aggregates 'rest' of the elements in a deconstruction into an array.
Spread is on the righ side of the equal to and rest will be on the left side

*/

let cars = [
  "Alto 800 Lxi",
  "Honda Civic Coupe LX",
  "Alto K10 Vxi",
  "Hyundai Grand i10",
];

let [firstCar, SecondCar, ...restOfCars] = cars;
console.log(firstCar, SecondCar, restOfCars); //will print Alto 800 Lxi Honda Civic Coupe LX [ 'Alto K10 Vxi', 'Hyundai Grand i10' ]
let [initialcar, , thirdCar, ...restOfTheCars] = cars;
console.log(initialcar, thirdCar, restOfTheCars); //will print Alto 800 Lxi Alto K10 Vxi [ 'Hyundai Grand i10' ]. Honda Civic Coupe LX will be missed out.
