const myYacht = {
  model: "Sunseeker 95",
  trips: [],
  trip(rangeInNM, fuelInL) {
    let tripAdvice = `${this.model} sailed ${
      rangeInNM * 1.852
    } Kilometers, consuming ${fuelInL} liters of Disel and providing a mileage of ${
      (rangeInNM * 1.852) / fuelInL
    } KMPL`;
    this.trips.push(tripAdvice);
    return tripAdvice;
  },
};

console.log(myYacht.trip(1400, 12000));

const myNewYacht = {
  model: "Sunseeker 116",
  trips: [],
};

const trip = myYacht.trip;
console.log(trip.call(myNewYacht, 1600, 14450));

const mySuperYacht = {
  model: "Sunseeker 131",
  trips: [],
};

const spec1 = [1500, 21650];
console.log(trip.apply(mySuperYacht, spec1));

const spec = [1600, 14450];
console.log(trip.apply(myNewYacht, spec));
console.log(
  "---------------------------------- BIND --------------------------------"
);
const yacht095 = trip.bind(myYacht);
const yacht116 = trip.bind(myNewYacht);
const yacht131 = trip.bind(mySuperYacht);
console.log(yacht095(2000, 10000));
console.log(yacht116(2000, 10000));
console.log(yacht131(2000, 10000));
console.log(
  "---------------------------------- BIND WITH PARAMETER--------------------------------"
);
const yachtB095 = trip.bind(myYacht, 2000);
const yachtB116 = trip.bind(myNewYacht, 2000);
const yachtB131 = trip.bind(mySuperYacht, 2000);
console.log(yachtB095(10000));
console.log(yachtB116(10000));
console.log(yachtB131(10000));

myYacht.count = 1;
myYacht.buyNewYacht = function () {
  this.count++;
  console.log(this.count);
};

document
  .querySelector(".button")
  .addEventListener("click", myYacht.buyNewYacht.bind(myYacht));
