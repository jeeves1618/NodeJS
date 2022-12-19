/*
    BUT WHAT IF WE WANT THE PROCESSING TO WAIT FOR FILE IO TO COMPLETE?

    We can use readFileSync function. But, thats not available in all JS frameworks. 

    We can use promises and put the synchrounous code in the then block. But, that is clumsy.

    Thats where await comes in.

    Any code inside the async function will be executed synchronously. That is it will wait for the IO operation to complete. 
*/

const fs = require("fs/promises");
let fileData;
async function readFile(fileName) {
  // The readfile function kicks off the IO operation and moves on to the next statement.
  try {
    fileData = await fs.readFile(fileName);
  } catch (error) {
    console.log(
      "Try catch can be used on async await in the same way as it is readFileSync"
    );
  }

  console.log(fileData); /* This will give a weird output of 
    <Buffer 59 6f 75 20 63 61 6e 20 61 76 6f 69 64 20 72 65 61 6c 69 74 79 2c 20 62 75 74 20 79 6f 75 20 63 61 6e 6e 6f 74 20 61 76 6f 69 64 20 74 68 65 20 63 6f ... 30 more bytes> 
    
    so, we will have to convert it to string*/

  console.log(fileData.toString());
  console.log("The code inside read block with execute synchronously");
}

readFile("file.txt");
console.log("The display after asynchronous read");
