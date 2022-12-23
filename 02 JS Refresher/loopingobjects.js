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

let propertiesOfObject = Object.keys(sunSeekerModels);

for (const property of propertiesOfObject) {
  console.log(property);
}

let valuesOfObject = Object.values(sunSeekerModels);

for (const value of valuesOfObject) {
  console.log(value);
}

let entriesOfObject = Object.entries(sunSeekerModels);

for (const entry of entriesOfObject) {
  console.log(entry);
}

//Destructuring further
for (const [prop, { length, beam }] of entriesOfObject) {
  console.log(prop, length, beam);
}
