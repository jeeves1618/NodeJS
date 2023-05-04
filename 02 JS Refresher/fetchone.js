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
    });
};

let border = getCountryData("PRT");
