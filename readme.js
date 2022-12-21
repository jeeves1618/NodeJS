/*

              H O U S E K E E P I N G   S T U F F
              ***********************************
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
*/
