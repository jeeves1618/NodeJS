function transformToObjects(numberArray) {
  let obj = {
    val: 0,
  };

  let objArray = [];

  for (const value of numberArray) {
    let objLocal = Object.create(obj);
    objLocal.val = value;
    objArray.push(objLocal);
  }

  return objArray;
}

let numArray = [1, 2, 3];
console.log(transformToObjects(numArray));
