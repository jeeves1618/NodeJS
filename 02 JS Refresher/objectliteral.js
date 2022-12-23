let relatedModels = [
  "predator-60-evo",
  "predator-65",
  "predator-74",
  "predator-74 xps",
];

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

  //ES6 enhancements
  relatedModels,

  relatedModelsDimension: {
    [relatedModels[0]]: {
      lengthOfYach: "18.24 M",
      beam: "4.74 M",
    },
    [relatedModels[1]]: {
      lengthOfYach: "20.50 M",
      beam: "5.10M M",
    },
    [relatedModels[2]]: {
      lengthOfYach: "22.82 M",
      beam: "5.38 M",
    },
    [relatedModels[3]]: {
      lengthOfYach: "22.82 M",
      beam: "5.38 M",
    },
  },
  orderYacht({
    name = "Predator 55 evo Sunseeker",
    engine = "GE Twin Propulsion",
    generators,
    propulsion,
  }) {
    console.log(
      `You have ordered an ${name} yacht with the engine ${engine} and the generators ${generators}. It will be propelled by ${propulsion}`
    );
  },
};

//1. Now to add the related models into the object, we would have written relatedModels:relatedModels, inside sunseeker55evo
//but with ES6, it is enough if you just write the right side of the colon as in, relatedModels,
//2. In the same way it is enough to add the function without the property name
//3. You can also compute the property values as I did in the relatedModelsDimension property above.

console.log(sunseeker55evo);

sunseeker55evo.orderYacht(sunseeker55evo);
