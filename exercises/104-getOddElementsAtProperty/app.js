var obj = {
  key: [1, 2, 3, 4, 5]
};

function getOddElementsAtProperty(obj, key) {
  // your code here
  let newArr = [];
  if (Array.isArray(obj[key])) {
    for (let value of obj[key]) {
      if (value % 2 === 1) {
        newArr.push(value);
      }
    }
  } else {
    return newArr;
  }
  return newArr;
}

var output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]