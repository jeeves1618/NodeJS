/*

    SHORT CIRCUITING CAN FURTHER BE SIMPLIFIED BY ASSIGNMENT OPERATORS

*/

let lengthInFeet = 0;
let yachtShortCircuit = lengthInFeet || 100;
console.log("Short Circuit : " + yachtShortCircuit);
/*
    OR ASSIGNMENT OPERATOR
*/
lengthInFeet ||= 100; //this is same as lengthInFeet = lengthInFeet || 100
//If you want zero to be not considered as falsi, use nullish Coalescing operator
yachtShortCircuit = lengthInFeet ?? 100;
console.log("Nullish Coalescing : " + yachtShortCircuit);

lengthInFeet = null;
yachtShortCircuit = lengthInFeet || 100;
console.log("Short Circuit : " + yachtShortCircuit);

lengthInFeet = 95;
yachtShortCircuit = lengthInFeet || 100;
console.log("Short Circuit : " + yachtShortCircuit);
