function getFirstElement(array) {
  // your code here
  for (let value of array) {
    if (value === value) {
      return value
    }
  }
}

var output = getFirstElement([1, 2, 3, 4, 5]);
console.log(output); // --> 1