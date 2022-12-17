function sumUpMarks(tamil, english, math, science, social) {
  return tamil + english + math + science + social;
}

console.log(sumUpMarks(78, 87, 100, 90)); //This will return NaN because the last parameter is missing and no default is assigned

/*
So, if we want the functions to be flexible to accept any number of parameters, we can pass an array.
*/

function sumOfMarks(marks) {
  let total = 0;

  for (const mark of marks) {
    total += mark;
  }

  return total;
}

console.log(sumOfMarks([78, 87, 100, 90]));

/*
Above will work. But what if you don't want to wrap the values into an array always?
*/

function sumRestMarks(...marks) {
  let total = 0;

  for (const mark of marks) {
    total += mark;
  }

  return total;
}

console.log(sumRestMarks(78, 87, 100, 90)); //This will return the value because the Rest Parameters is converted into an array.

//sumRestMarks expects a list of numbers and NOT on an array. For instance, passing the following array to sumRestMarks will not work.

const numArray = [78, 87, 100, 90];
console.log(sumRestMarks(numArray));

//You can use the spread operator to spread the array into multiple values.
console.log(sumRestMarks(...numArray)); //This will return the right number
