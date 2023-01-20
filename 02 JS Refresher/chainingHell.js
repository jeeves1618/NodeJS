const get1stcountry = function (code) {
  fetch(`https://restcountries.com/v3.1/alpha/${code}`).then(function (data) {
    data.json().then(function (data) {
      console.log(data);
      console.log(
        `${data[0].name.official} is in ${data[0].continents[0]} and its neighbour is `
      );
      fetch(`https://restcountries.com/v3.1/alpha/${data[0].borders[0]}`).then(
        function (data) {
          data.json().then(function (data) {
            console.log(
              `${data[0].name.official} and it is in ${data[0].continents[0]}`
            );
          });
        }
      );
    });
  });
};

get1stcountry("per");
