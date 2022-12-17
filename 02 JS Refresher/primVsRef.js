const cars = [
  "Maruti Alto 800",
  "Honda Civic Coupe LX",
  "Maruti Alto K10 Vxi",
  "Hyundai Grand i10 Asta",
];
cars.push("VW Taigun GT");
/*We are able to change the constant array. Because, in cars, only a pointer to the variable is stored. 
Same will be the case with the objects. You can change the properties of the objects even if they are declared as constants */

const person = { age: 38 };

function yearsToRetire(p) {
  p.age = 58 - p.age;
  return p.age;
}

console.log(yearsToRetire(person)); //returns 20
console.log(person); //returns { age: 20 }. Age, because of pass by reference, is changes in the person object also.

person.age = 38;

console.log(yearsToRetire({ ...person })); //returns 20
console.log(person);
/*returns{ age: 38 }. Spread operator will create a new object and pass it to the function. When you use spread operator on object it gives the list of key value pairs of all projects.*/
