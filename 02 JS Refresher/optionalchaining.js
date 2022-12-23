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

//Lets say we receive that object from a web service and we don't know where a related models property exist or not

//So, we try to use that property as follows
//console.log(sunseeker55evo.relatedModels.predator60); //Cannot read properties of undefined (reading 'predator60')

//Writing with optional chaining. Stops if undefined is encountered.
console.log(sunseeker55evo.relatedModels?.predator60); //undefined

//Optional chaining also works with dynamic propery names

let sunSeekerModels = {
  predator55evo: {
    length: "55 ft",
    beam: "14 ft",
  },
  predator65evo: {
    length: "65 ft",
    beam: "16 ft",
  },

  predator76evo: {
    length: "76 ft",
    beam: "18 ft",
  },
  predator88evo: {
    length: "88 ft",
    beam: "22 ft",
  },
  predator90evo: {
    length: "90 ft",
    beam: "24 ft",
  },
};

console.log(sunSeekerModels);

let modelNames = [
  "predator55evo",
  "predator65evo",
  "predator76evo",
  "predator88evo",
  "predator90evo",
  "predator95evo",
];

for (const model of modelNames) {
  console.log(sunSeekerModels[model]?.length); //THis statemet will not fail. It will just print undefined.
  console.log(sunSeekerModels[model].length); //THis statemet will fail with  Cannot read properties of undefined (reading 'length') for redator95evo
}
