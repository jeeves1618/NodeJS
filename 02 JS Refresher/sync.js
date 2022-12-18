const fs = require("fs");

function readFile(fileName) {
  // The Sync in the readFileSync ensures that the i/o operation is synchronous.
  const fileData = fs.readFileSync(fileName);

  console.log(fileData); /* This will give a weird output of 
  <Buffer 59 6f 75 20 63 61 6e 20 61 76 6f 69 64 20 72 65 61 6c 69 74 79 2c 20 62 75 74 20 79 6f 75 20 63 61 6e 6e 6f 74 20 61 76 6f 69 64 20 74 68 65 20 63 6f ... 30 more bytes> 
  
  so, we will have to convert it to string*/

  console.log(fileData.toString());
}

readFile("file.txt");
