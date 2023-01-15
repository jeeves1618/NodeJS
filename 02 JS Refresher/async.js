const fs = require("fs");
let fileData;
function readFile(fileName) {
  // The readfile function kicks off the IO operation and moves on to the next statement.
  fs.readFile(fileName, function (error, fileData) {
    if (error) {
      console.log("There is an error in the async processing");
    }
    console.log(fileData); /* This will give a weird output of 
    <Buffer 59 6f 75 20 63 61 6e 20 61 76 6f 69 64 20 72 65 61 6c 69 74 79 2c 20 62 75 74 20 79 6f 75 20 63 61 6e 6e 6f 74 20 61 76 6f 69 64 20 74 68 65 20 63 6f ... 30 more bytes> 
    
    so, we will have to convert it to string*/

    console.log(fileData.toString());
  });
}

readFile("file.txt");
console.log("The display after asynchronous read");

const a = "Synchronous processing is done!";
setTimeout(function () {
  console.log("Asynchronous process is also done!");
}, 2000);
console.log(a);
