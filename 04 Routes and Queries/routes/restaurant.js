const express = require("express");
const restaurantData = require("../utilities/fileOperations");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const uuid = require("uuid");

router.get("/confirm", getConfirm);
router.get("/recommend", getRecommend);
router.post("/recommend", postRecommend);
router.get("/restaurants", getRestaurants);
router.get("/restaurant/:uid", getRestaurantById);

function indexPage(request, response) {
  response.send("<h1>Hello World!</h1>");
}

function getConfirm(request, response) {
  /*
  Since the ejs template engine is going to be used, we don't have to send the html file to browser.
  If we send the ejs filr to server, by changing the extension to .ejs, browser will not know how to render it.

  const restaurantFilePath = path.join(__dirname, "views", "confirm.html");
  response.sendFile(restaurantFilePath);
  
  So, to convert the ejs file and render it as HTML page, we are using the render function
  */
  response.render("confirm");
}

function getRecommend(request, response) {
  /*
  Since the ejs template engine is going to be used, we don't have to send the html file to browser.
  If we send the ejs filr to server, by changing the extension to .ejs, browser will not know how to render it.

  const restaurantFilePath = path.join(__dirname, "views", "recommend.html");
  response.sendFile(restaurantFilePath);
  
  
  So, to convert the ejs file and render it as HTML page, we are using the render function
  */
  response.render("recommend");
}

function postRecommend(request, response) {
  //const restaurantName = request.body.name; Instead of capturing individual form data, we can capture the data itself
  const restaurant = request.body;
  /*In order to add a unique ID, we will use a third party package uuid
  npm install uuid will do the job
  get the object from uuid package using const uuid = require('uuid');
  */
  restaurant.uid = uuid.v4();
  // const dataFilePath = path.join(__dirname, "data", "restaurants.json");
  // const restaurantsRaw = fs.readFileSync(dataFilePath);
  // const restaurantsJson = JSON.parse(restaurantsRaw);
  const restaurantsJson = restaurantData.readJsonFile();
  restaurantsJson.push(restaurant);
  // const restaurantsUpdated = JSON.stringify(restaurantsJson);
  // fs.writeFileSync(dataFilePath, restaurantsUpdated);
  restaurantData.writeJsonFile(restaurantsJson);
  console.log("Wrote the file successfully...");
  response.redirect("/confirm");
}
function getRestaurants(request, response) {
  /*
  Since the ejs template engine is going to be used, we don't have to send the html file to browser.
  If we send the ejs filr to server, by changing the extension to .ejs, browser will not know how to render it.

  const restaurantFilePath = path.join(__dirname, "views", "restaurants.html");
  response.sendFile(restaurantFilePath);

  */
  const dataFilePath = path.join(__dirname, "..", "data", "restaurants.json");
  const restaurantsRaw = fs.readFileSync(dataFilePath);
  const restaurantsJson = JSON.parse(restaurantsRaw);
  let orderOfRestaurants = request.query.order;
  let nextOrder = null;
  if (orderOfRestaurants !== "asc" && orderOfRestaurants !== "desc") {
    orderOfRestaurants == "asc";
  }

  if (orderOfRestaurants === "asc") {
    nextOrder = "desc";
  } else {
    nextOrder = "asc";
  }

  restaurantsJson.sort(function (resA, resB) {
    if (
      (resA.name < resB.name && orderOfRestaurants === "asc") ||
      (resA.name > resB.name && orderOfRestaurants === "desc")
    ) {
      return 1;
    }
    return -1;
  });
  /*
  So, to convert the ejs file and render it as HTML page, we are using the render function
  */

  response.render("restaurants", {
    numberOfRestaurants: restaurantsJson.length,
    restaurants: restaurantsJson,
    nextOrder: nextOrder,
  });
}

function getRestaurantById(request, response) {
  const restaurantId = request.params.uid;
  const dataFilePath = path.join(__dirname, "data", "restaurants.json");
  const restaurantsRaw = fs.readFileSync(dataFilePath);
  const restaurantsJson = JSON.parse(restaurantsRaw);

  for (const restaurant of restaurantsJson) {
    if (restaurant.uid === restaurantId) {
      return response.render("restaurant-detail", { restaurant: restaurant });
    }
  }
  // response.render is not going to pass the status code to the browser
  // response.render("404"); So, we are going to chain the function as below.
  response.status(404).render("404");
  //Render is still acting on the response object. Just that status() function enhanced that object.
}

module.exports = router;
