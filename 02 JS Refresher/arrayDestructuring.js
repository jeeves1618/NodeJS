/*
                A R R A Y   D E S T R U C T U R I N G
*/
const team83 = [
  "Kapil Dev",
  "Mohinder Amarnath",
  "Kirti Azad",
  "Roger Binny",
  "Sunil Gavaskar",
  "Syed Kirmani",
  "Madan Lal",
  "Sandip Patil",
  "Balwinder Sandhu",
  "Yashpal Sharma",
  "Ravi Shastri",
  "Krishnamachari Srikkanth",
  "Sunil Valson",
  "Dilip Vengsarkar",
];

const [first, second] = team83;
console.log(first, second); //Kapil Dev Mohinder Amarnath

let [, , third, , fifth] = team83;
console.log(third, fifth); //Kirti Azad Sunil Gavaskar

//Flipping using destructuring
[third, fifth] = [fifth, third];
console.log(third, fifth); //Sunil Gavaskar Kirti Azad

let arrayOfFirstTwo = [first, second];
let [a, b, c] = arrayOfFirstTwo;
console.log(a, b, c); //Kapil Dev Mohinder Amarnath undefined
let [p = "Unassigned", q = "Unassigned", r = "Unassigned"] = arrayOfFirstTwo;
console.log(p, q, r); //Kapil Dev Mohinder Amarnath Unassigned
//A realistic use case of array destructuring.

const takeHomeCalc = function (annualGrossSalary) {
  const taxPercent = 30;
  const surchargePercent = 15;

  const monthlyTakeHome =
    (annualGrossSalary -
      (((annualGrossSalary * taxPercent) / 100) * (100 + surchargePercent)) /
        100) /
    12;
  const metaDataText = `Applied a tax rate of ${taxPercent}% and a surcharge of ${surchargePercent}% in this computation`;
  return [monthlyTakeHome, metaDataText];
};

const [monthlyTakeHome] = takeHomeCalc(272000);
console.log("Monthly take home is " + monthlyTakeHome); //Monthly take home is 14846.666666666666
