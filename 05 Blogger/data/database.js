// get the client
const mysql = require("mysql2/promise");

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
  //Host is the server in which the DB is installed. The port 3306 is automatically taken by mysql2 package
  host: "localhost",
  user: "root",
  database: "blogger",
  password: "BumbleJoy",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;
