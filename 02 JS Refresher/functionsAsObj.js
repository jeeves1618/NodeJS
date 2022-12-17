/*
    In JS, a function is also an object.

    /*
      LOOK CAREFULLY AT THE EXPRESS CODE. In this line express function is invoked as a function, const app = express(); 

      But In this line express.urlencoded({ extended: false }), express is used as an object and its urlencoded property is accessed.

      You can see the object format of any function through console.dir in chrome. It will show the default properties.

      In case of express, the developers have added an additional property to express, which we don't do in application development normally. 
      
*/

function sumRestMarks(...marks) {
  let total = 0;

  for (const mark of marks) {
    total += mark;
  }

  return total;
}

console.dir(sumRestMarks); //This will return the right number
