/*

              H O U S E K E E P I N G   S T U F F
              ***********************************
              0. npm init and try to give meaningful information 
			  1. npm start - the command to start the node server
              2. Ctrl + c - the command to stop the node server
              3. npm install <package-name> - 
              4. npm install nodemon --save-dev
                    (--save-dev tells node it is only for development purposes)
              5. to start the app using nodemon, go to package.json and under scripts, give "start": "nodemon app.js"
              6. After this, it is possible to start the server by npm start
			  
			  
			  R O U T E R
			  ***********
			  1. Create a new JS file
			  2. Get express object through const express = require("express");
			  3. Get router object through const router = express.Router();
			  4. use router.get("/confirm", getConfirm); to route the requests
			  5. Export the router through module.exports = router;
			  6. In the calling module, create an object for the route through the statement const defaultRoute = require("./routes/default");
			  
			  
			  D A T A B A S E
			  ***************
			  1. We are going to use a third party package https://www.npmjs.com/package/mysql2
			  2. npm install --save mysql2
			  3. npm install mongodb
			  
			  
			  M O N G O   D B
			  ***************
			  0. Connection string to MongoDB await mongoClient.connect("mongodb://127.0.0.1:27017");
			  1. net start MongoDB - to start the service
			  2. net stop MongoDB - to stop the service
			  3. show dbs - for listing down the database; once you are inside the database, show collections will list down the collections
			  4. use <dbname> - for creating a database. The new data base will not get listed untill we insert something
			  5. once you have switched to the db, use db.<collectionname>.insertOne({}) to insert documents
			  6. Ex. db.restaurants.insertOne({name: "Panera Breads", address: {street: "Columbia Turn Pike", location: "Florham Park"}})
			  7. db.restaurants.find() is select all 
			  8. To filter your find, db.restaurants.find({which documents filter},{which fields filter})
			  9. Ex: db.restaurants.find({name: "The Farm"},{address:1, _id:0}) This filters the name The Farm and asks address column to be selected and id column to be not selected.
			  10.find function will return an array of document(s). If you want only one document use findOne() method.
			  11.Example to query from a nested property: db.restaurants.find({'address.location': "Florham Park"})
			  12.updateOne() and updateMany() functions with similar syntax are available for updating
			  13.db.restaurants.updateOne({_id: ObjectId("63a69b92cf880bfacacc78c5")},{$set:{'address.street':"Columbia Turnpike"}}) Updating street within address for an ID
			  14.deleteOne() and deleteMany() functions with similar syntax are available for deleting
			  15.Ex: db.restaurants.deleteOne({_id: ObjectId("63a69b2acf880bfacacc78c4")})
			  16.db.<collectionname>.deleteMany({}) will delete all the documents
			  17.You can use gt, lt, gte, lte in db.reviews.find({rating: {$gt: 3}})
			  18.db.author.find() translates to 
			  
			  F I L E   U P L O A D 
			  *********************
			  1. npm install --save multer
			  
			  A J A X
			  ********
			  1. Used for browser side Javascript language to make HTTP requests
			  2. XMLHttpRequest and Fetch() are the two ways in which you can achieve this.
			  3. XMLHttpRequest can also handle JSON files.
			  4. fetch() is a modern alternative to XMLHttpRequest. fetch supports promises, but XMLHttpRequest doesn't.	
			  
*/
