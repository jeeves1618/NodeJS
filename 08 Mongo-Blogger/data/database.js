//Get the installed the mongodb
const mongodb = require("mongodb");
// get the client
const mongoClient = mongodb.MongoClient;
let dataBase;
//This connection will establish the connection pool thus enabling multiple connections
async function connect() {
  const client = await mongoClient.connect("mongodb://127.0.0.1:27017");
  //Once the connection pool is established, you connect to the blog db created for this project
  dataBase = client.db("blogger");
}

function getDb() {
  if (!dataBase) {
    throw {
      message:
        "Database connection not established. Please check the connection pool",
    };
  }
  return dataBase;
}

module.exports = {
  connectToDatabase: connect,
  getDatabase: getDb,
};
