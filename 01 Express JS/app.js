/*
ExpressJS is installed through NPM Node Package Manager (NPM) command. NPM is part of node installation

To make the folder, in which your JS code is, into node manager project, first start with NPM INIT

NPM INIT will create a package.json file.

Once it is created you can go ahead and run NPM INSTALL EXPRESS

Then change const http = require("http"); to const expres = require(express). http outputs an object whose functions can be invoked. But, express outputs a function.

And that function returns an object. And we catch that in const app = express();

Install nodemon also to avoid the hassle of stopping and starting the servers - npm install nodemon

*/
const fileSystem = require("fs");
const path = require("path");
const express = require("express");

/*
      LOOK CAREFULLY. In this line express function is invoked as a function, const app = express(); 

      But In this line express.urlencoded({ extended: false }), express is used as an object and its urlencoded property is accessed.

      You can see the object format of any function through console.dir in chrome. It will show the default properties.

      In case of express, the developers have added an additional property to express, which we don't do in application development normally. 
      
*/
const app = express();

app.use(express.urlencoded({ extended: false }));

function dawkinsQuote(request, response) {
  //response.statusCode = 200; Express will set the status code as default. So, we don't have to set it here
  response.send(
    "<h1>" +
      new Date().toISOString() +
      "</h1><hr><h1>The chicken is only an eggs way for making another egg.</h1><hr>"
  );
}

function defaultQuote(request, response) {
  //response.statusCode = 200; Express will set the status code as default. So, we don't have to set it here
  response.send(
    "<h1>" +
      new Date().toISOString() +
      "</h1><hr><h1>Since we are creating this server in NodeJS, we don't need live server extension in code.</h1><hr>"
  );
}

function basicForm(request, response) {
  //response.statusCode = 200; Express will set the status code as default. So, we don't have to set it here
  response.send(
    `<h1><form action="/save-tweet" method="POST"><label>Your tweet : <label><input type="text" name="tweet"><br><button>Submit</button></form></h1><hr>`
  );
}

function saveTweet(request, response) {
  //response.statusCode = 200; Express will set the status code as default. So, we don't have to set it here
  const tweetEntered = request.body.tweet;
  const filePath = path.join(__dirname, "data", "tweet.json");
  console.log(tweetEntered);
  const tweetRawData = fileSystem.readFileSync(filePath); //This returns the raw data from file

  const existingTweets = JSON.parse(tweetRawData); //This converts the raw data into Json format.
  existingTweets.push(tweetEntered); //Adds the new tweet to the existing tweet
  const updatedTweets = JSON.stringify(existingTweets); //Converts it back to raw string format to write
  fileSystem.writeFileSync(filePath, updatedTweets);
  response.send(`<h1>The tweet is saved successfully<hr>`);
}

function getTweetsJson(request, response) {
  const filePath = path.join(__dirname, "data", "tweet.json");
  const tweetRawData = fileSystem.readFileSync(filePath); //This returns the raw data from file
  const existingTweets = JSON.parse(tweetRawData); //This converts the raw data into Json format.
  response.send(existingTweets);
}

function getTweets(request, response) {
  const filePath = path.join(__dirname, "data", "tweet.json");
  const tweetRawData = fileSystem.readFileSync(filePath); //This returns the raw data from file
  const existingTweets = JSON.parse(tweetRawData); //This converts the raw data into Json format.
  let formattedTweets = "<ol>";
  for (let tweet of existingTweets) {
    formattedTweets = formattedTweets + "<li>" + tweet + "</li>";
  }
  formattedTweets = formattedTweets + "</ol>";

  response.send(formattedTweets);
}

app.get("/dawkins", dawkinsQuote);

app.get("/", defaultQuote);

app.get("/form", basicForm);

app.post("/save-tweet", saveTweet);

app.get("/tweets", getTweetsJson);

app.get("/tweetsFormatted", getTweets);

app.listen(3000);
