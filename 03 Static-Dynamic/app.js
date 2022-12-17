/*

              H O U S E K E E P I N G   S T U F F
              ***********************************
              1. npm start - the command to start the node server
              2. Ctrl + c - the command to stop the node server
              3. npm install <package-name> - 

*/
/*
require is more like a new in Java (Oh, Really??!?? )
*/
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const uuid = require("uuid");

const restaurantData = require("./utilities/fileOperations");
/*
To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
The function signature is: express.static(root, [options]) . The root argument specifies the root directory from which to serve static assets.
The options are available here https://expressjs.com/en/4x/api.html#express.static
*/
app.use(express.static("public"));
/*
This is a built-in middleware function in Express. It parses incoming requests with urlencoded payload
 */

/*
Templates are basically HTML files with special placeholders for embedding data from server. Template engines are used to resolve the data from server
Express has few template engines. One of the popular template engine is EJS.
npm install ejs will install ejs.
Once ejs is installed, please convert the .html files to .ejs files.
*/

/*
Setting the ejs template engine
*/
app.set("view engine", "ejs");
/*
Setting the path to the HTML templates.
*/
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));
app.listen(3000);

app.get("/", getIndex);
app.get("/about", getAbout);
app.get("/confirm", getConfirm);
app.get("/index", getIndex);
app.get("/recommend", getRecommend);
app.post("/recommend", postRecommend);
app.get("/restaurants", getRestaurants);
app.get("/restaurant/:uid", getRestaurantById);

function indexPage(request, response) {
  response.send("<h1>Hello World!</h1>");
}

function getAbout(request, response) {
  /*
  Since the ejs template engine is going to be used, we don't have to send the html file to browser.
  If we send the ejs filr to server, by changing the extension to .ejs, browser will not know how to render it.
  
  const restaurantFilePath = path.join(__dirname, "views", "about.html");
  response.sendFile(restaurantFilePath);

  So, to convert the ejs file and render it as HTML page, we are using the render function
  */
  response.render("about");
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

function getIndex(request, response) {
  /*
  Since the ejs template engine is going to be used, we don't have to send the html file to browser.
  If we send the ejs filr to server, by changing the extension to .ejs, browser will not know how to render it.

  const restaurantFilePath = path.join(__dirname, "views", "index.html");
  response.sendFile(restaurantFilePath);

    So, to convert the ejs file and render it as HTML page, we are using the render function
  */
  response.render("index");
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
  response.redirect("/confirm");
}
function getRestaurants(request, response) {
  /*
  Since the ejs template engine is going to be used, we don't have to send the html file to browser.
  If we send the ejs filr to server, by changing the extension to .ejs, browser will not know how to render it.

  const restaurantFilePath = path.join(__dirname, "views", "restaurants.html");
  response.sendFile(restaurantFilePath);

  */
  const dataFilePath = path.join(__dirname, "data", "restaurants.json");
  const restaurantsRaw = fs.readFileSync(dataFilePath);
  const restaurantsJson = JSON.parse(restaurantsRaw);
  /*
  So, to convert the ejs file and render it as HTML page, we are using the render function
  */
  response.render("restaurants", {
    numberOfRestaurants: restaurantsJson.length,
    restaurants: restaurantsJson,
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
/*
catch all for invalid urls
*/
app.use(catchAll);

function catchAll(request, response) {
  // response.render is not going to pass the status code to the browser
  // response.render("404"); So, we are going to chain the function as below.
  response.status(404).render("404");
  //Render is still acting on the response object. Just that status() function enhanced that object.
}

/*
for all server side errors
*/

app.use(serverError);

function serverError(error, request, response, next) {
  // response.render is not going to pass the status code to the browser
  // response.render("500"); So, we are going to chain the function as below.
  response.status(500).render("500");
  //Render is still acting on the response object. Just that status() function enhanced that object.
}
