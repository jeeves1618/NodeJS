const path = require("path");

const express = require("express");

const blogRoutes = require("./routes/blog");

const db = require("./data/database");

const app = express();

// Activate EJS view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true })); // Parse incoming request bodies
app.use(express.static("public")); // Serve static files (e.g. CSS files)

app.use(blogRoutes);

app.use(function (error, req, res, next) {
  // Default error handling function
  // Will become active whenever any route / middleware crashes
  console.log(error);
  res.status(500).render("500");
});

/*
We start listening to the webserver only after the DB connection is successful
We are not using the await here since the connect to DB statement is not inside an async function.
Instead we are executing the promise using the then function
*/
db.connectToDatabase().then(function () {
  console.log("connected to database");
  app.listen(3000);
});
