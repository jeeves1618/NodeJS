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
  propulsion: "SHAFTS",
  generators: "7KW @ 50HZ - 9KW @60HZ",
};

let { engine, performance } = sunseeker55evo;
console.log(engine, performance); //TWIN VOLVO PENTA D11-725 (2 X 725PS) 32 KNOTS

let { engine: motor, performance: topSpeed } = sunseeker55evo;
console.log(motor, topSpeed); //TWIN VOLVO PENTA D11-725 (2 X 725PS) 32 KNOTS

// Default Values
let { range = "100 NM", propulsion = "fuel based" } = sunseeker55evo;
console.log(range, propulsion); //100 NM SHAFTS

//if the variables are previously defined, you cannot do this: { engine, performance } = sunseeker55evo; Instead,
({ engine, performance } = sunseeker55evo);

//Nested Objects
let {
  ranges: { At10knots, At5knots },
} = sunseeker55evo;
console.log(At10knots, At5knots); //265 NATUICAL MILES 315 NATUICAL MILES

//Destructuring while passing to functions and having default values

let orderYacht = function ({
  name = "Predator 55 evo Sunseeker",
  engine = "GE Twin Propulsion",
  generators,
  propulsion,
}) {
  console.log(
    `You have ordered an ${name} yacht with the engine ${engine} and the generators ${generators}. It will be propelled by ${propulsion}`
  );
};

orderYacht(sunseeker55evo); //You have ordered an yacht with the engine TWIN VOLVO PENTA D11-725 (2 X 725PS) and the generators 7KW @ 50HZ - 9KW @60HZ. It will be propelled by SHAFTS

console.log(
  "--------------------------------------------------------------------------------------------------"
);
console.log(Object.entries(sunseeker55evo));
console.log(
  "--------------------------------------------------------------------------------------------------"
);
console.log(Object.values(sunseeker55evo));
console.log(
  "--------------------------------------------------------------------------------------------------"
);
