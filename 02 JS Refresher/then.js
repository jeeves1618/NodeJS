`use strict`;

//
/*
let pauseAndGreet = function (countdown) {
  let myTimeout = setTimeout(function () {
    console.log(`${countdown} seconds to go...`);
    return countdown--;
  }, 1000);
};*/
fetch(`https://restcountries.com/v3.1/alpha/ESP`)
  .then(function (data1) {
    console.log(data1);
    return "first";
  })
  .then(function (data2) {
    console.log(data2);
    return "Second";
  })
  .then(function (data3) {
    console.log(data3);
    return "Third";
  });
