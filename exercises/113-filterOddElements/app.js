function filterOddElements(arr) {
  // your code here
  const newArr = [];
  for (let value of arr) {
    if (value % 2 === 1) {
      newArr.push(value);
    }
  }
  return newArr
}

var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]