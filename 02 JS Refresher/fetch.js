"use strict";

const getCountryData = function (country) {
  let nextCountry;
  fetch(`https://restcountries.com/v3.1/alpha/${country}`)
    .then(function (ajaxResponse) {
      //console.log(ajaxResponse);
      //ajaxResponse can't be read since it is a readstream.
      //So, you have to use a json method, which itself is an async function returning a promisr
      return ajaxResponse.json();
    })
    .then(function (formatedData) {
      let [jObject] = formatedData;
      nextCountry = jObject.borders[0];
      console.log(jObject.name.official);
      console.log(nextCountry);
      return nextCountry;
    })
    .then(function (returnedData) {
      //then method will always return a promise.
      console.log("Returned data from then is " + returnedData); //Fulfilled value is
      fetch(`https://restcountries.com/v3.1/alpha/${returnedData}`)
        .then(function (neighbour) {
          return neighbour.json();
        })
        .then(function (neighbourData) {
          let [jObject] = neighbourData;
          console.log(jObject.name.official);
          console.log(nextCountry);
          return nextCountry;
        });
    });
};

let border = getCountryData("PRT");
