const fs = require("fs");
const path = require("path");

const dataFilePath = path.join(__dirname, "..", "data", "restaurants.json");

function readJsonFile() {
  const restaurantsRaw = fs.readFileSync(dataFilePath);
  const restaurantsJson = JSON.parse(restaurantsRaw);
  return restaurantsJson;
}

function writeJsonFile(restaurantsJson) {
  const restaurantsUpdated = JSON.stringify(restaurantsJson);
  fs.writeFileSync(dataFilePath, restaurantsUpdated);
}

module.exports = {
  readJsonFile: readJsonFile,
  writeJsonFile: writeJsonFile,
};
