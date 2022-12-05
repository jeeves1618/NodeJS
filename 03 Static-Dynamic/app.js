const express = require("express");
const path = require("path");

const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.listen(3000);

app.get("/", getIndex);
app.get("/about", getAbout);
app.get("/confirm", getConfirm);
app.get("/index", getIndex);
app.get("/recommend", getRecommend);
app.get("/restaurants", getRestaurants);

function indexPage(request, response) {
  response.send("<h1>Hello World!</h1>");
}

function getAbout(request, response) {
  const restaurantFilePath = path.join(__dirname, "views", "about.html");
  response.sendFile(restaurantFilePath);
}

function getConfirm(request, response) {
  const restaurantFilePath = path.join(__dirname, "views", "confirm.html");
  response.sendFile(restaurantFilePath);
}

function getIndex(request, response) {
  const restaurantFilePath = path.join(__dirname, "views", "index.html");
  response.sendFile(restaurantFilePath);
}

function getRecommend(request, response) {
  const restaurantFilePath = path.join(__dirname, "views", "recommend.html");
  response.sendFile(restaurantFilePath);
}

function getRestaurants(request, response) {
  const restaurantFilePath = path.join(__dirname, "views", "restaurants.html");
  response.sendFile(restaurantFilePath);
}
