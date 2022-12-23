/*
    Boolean operators

    1. They can use any Data Type
    2. They can return any Data Type
    3. They can be short circuited
*/

console.log("-------------------- O R ------------------");
console.log(0 || "Sunseeker");
console.log("" || "Sunseeker");
console.log(true || "Sunseeker");
console.log(undefined || null);

console.log(0 || "" || undefined || null || "Prestige" || true);

//Ternary operators can be replaced with Short Circuits
let lengthInFeet = 0;
let yachtLength = lengthInFeet ? lengthInFeet : 100;
console.log("Ternary : " + yachtLength);
let yachtShortCircuit = lengthInFeet || 100;
console.log("Short Circuit : " + yachtShortCircuit);
//If you want zero to be not considered as falsi, use nullish Coalescing operator
yachtShortCircuit = lengthInFeet ?? 100;
console.log("Nullish Coalescing : " + yachtShortCircuit);

lengthInFeet = null;
yachtLength = lengthInFeet ? lengthInFeet : 100;
console.log("Ternary : " + yachtLength);
yachtShortCircuit = lengthInFeet || 100;
console.log("Short Circuit : " + yachtShortCircuit);

lengthInFeet = 95;
yachtLength = lengthInFeet ? lengthInFeet : 100;
console.log("Ternary : " + yachtLength);
yachtShortCircuit = lengthInFeet || 100;
console.log("Short Circuit : " + yachtShortCircuit);

console.log("-------------------- A N D -----------------");
//And will stop at the first truthy value
console.log(0 && "Sunseeker");
console.log("" && "Sunseeker");
console.log(true && "Sunseeker");
console.log(undefined && null);

//Practical usage. Use it instead of If.

let calculateDaysInWater = function (fuelCapacity, dailyBurnRate) {
  console.log(
    `You can survive in the water for ${fuelCapacity / dailyBurnRate} days`
  );
};
//Execute only when the function exists
calculateDaysInWater && calculateDaysInWater(1800, 21);
//
