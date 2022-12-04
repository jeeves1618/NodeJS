/*Spread Opertor

Spread operator takes elements out of array and spreads it as individual elements
i.e SPREAD OPERATOR EXPANDS THE ARRAY INTO INDIVIDUAL ELEMENTS
We can use spread operator to copy arrays.
*/
let cars = [
  "Alto 800 Lxi",
  "Honda Civic Coupe LX",
  "Alto K10 Vxi",
  "Hyundai Grand i10",
];
let newcars = [...cars, "Mahindra Thar"];
console.log(newcars); //This will print the array of cars including Mahindra Thar at index 4.
console.log(...newcars); //This will print the individual array elements.

let futureCars = ["Hyundai Creta", "Skoda Octavia"];

//Spread operator can also be used to merge two arrays
let allCars = [...newcars, ...futureCars];
console.log(allCars);

//Spread operator can be used to spread the characters from a string into an array
let carOne = [...allCars[0]];
console.log(carOne);

//Spread Operator Can also be used in objects

let vwTaigun = {
  engine: "1.5 Litres",
  power: "147.95 BHP",
  torque: "250 NM",
};

console.log(vwTaigun);

vwTaigun = { kerbWeight: 1260, ...vwTaigun };
console.log(vwTaigun);
