function squareElements(arr) {
  // your code here
  let newArr = [];
  for (let value of arr) {
    if (value) {
      newArr.push(value * value)
    }
  }
  return newArr
}

var output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]