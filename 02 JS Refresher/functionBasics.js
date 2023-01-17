const calcAge = function (birth = 1908, now = birth + 16) {
  return now - birth;
};

console.log(calcAge());

const greet = (person) => {
  console.log("hey " + person);
};

const greeter1 = (fn, person) => {
  fn(person);
};
greeter1(greet, "Universe");

const sum = (a, b, c = 10) => {
  console.log(`${a} ${b} ${c}`);
};
sum(20);

const fun = function (greet) {
  return function (name) {
    console.log(`${greet} ${name}`);
  };
};

const greeter = fun("Hello");
greeter("World");
fun("Hello")("Universe");
