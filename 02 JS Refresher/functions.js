function computeTakeHome(grossSalary) {
  console.log("Your take home is " + grossSalary * 0.68);
}

computeTakeHome(100000); //Your take home is 68000
computeTakeHome(); //Your take home is NaN

/*
To avoid NaN you can have default value in the parms
*/

function computeTakeHomeAdv(grossSalary = 200000) {
  console.log("Your take home is " + grossSalary * 0.68);
}

computeTakeHomeAdv(); //Your take home is 136000

//When you have multiple parameters, parameters with default values should be in the end.
