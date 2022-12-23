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
console.log({ ...vwTaigun });

//Spread operator can be used to create the shallow copy of arrays
let sunseeker55evo = {
  beam: "4.48 M",
  draft: "1.33 M",
  displacement: "21,000 KG",
  freshWaterCapacity: "450 L",
  blackWaterCapacity: "150 L",
  fuelCapacity: "1,800 L",
  cabins: "2-3",
  ensuites: "2",
  engine: "TWIN VOLVO PENTA D11-725 (2 X 725PS)",
  performance: "32 KNOTS",
  ranges: {
    At21knots: "235 NATUICAL MILES",
    At10knots: "265 NATUICAL MILES",
    At5knots: "315 NATUICAL MILES",
  },
  relatedModels: [
    "predator-60-evo",
    "predator-65",
    "predator-74",
    "predator-74 xps",
  ],
  propulsion: "SHAFTS",
  generators: "7KW @ 50HZ - 9KW @60HZ",
};

let yachtRanges = [...sunseeker55evo.relatedModels];
console.log(yachtRanges); //[ 'predator-60-evo', 'predator-65', 'predator-74', 'predator-74 xps' ]

//You can use spread operator on other iterables in Java script.
//Other iterables in Java Script are arrays, strings, maps, sets

let make = "Sunseeker";
let makeInLetters = [...make, " ", "i", "n", "c"];
console.log(makeInLetters); /* This will print
[
  'S', 'u', 'n', 's',
  'e', 'e', 'k', 'e',
  'r', ' ', 'i', 'n',
  'c'
]
*/
let yachtInquiry = function (model1, model2, model3, model4) {
  console.log(
    `Please check our modesl ${model1},${model2},${model3} and ${model4}`
  );
};

yachtInquiry(...sunseeker55evo.relatedModels); //will output Please check our modesl predator-60-evo,predator-65,predator-74 and predator-74 xps
yachtInquiry([...sunseeker55evo.relatedModels]); //will output Please check our modesl predator-60-evo,predator-65,predator-74,predator-74 xps,undefined,undefined and undefined
