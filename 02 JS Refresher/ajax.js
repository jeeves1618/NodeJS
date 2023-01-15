/*
    Lets query the country service for https://restcountries.com/v2/ using old AJAX HTTP method

    This is only for reference. XMLHttpRequest is a built-in object in web browsers and is not part of node distribution.
*/

const req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/name/spain");
req.send();
req.addEventListener("load", function () {
  const [data] = JSON.parse(req.responseText);
  console.log(data);
});
