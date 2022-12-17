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

const defaultRoute = require("./routes/default");
const restaurantRoute = require("./routes/restaurant");
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

app.use("/", defaultRoute);
app.use("/", restaurantRoute);
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
