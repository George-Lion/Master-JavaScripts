
var obj = {
  key: [1000, 11, 50, 17]
};

function getEvenElementsAtProperty(obj, key) {
  // your code here
  let newArr = [];
  if (Array.isArray(obj[key])) {
    for (let value of obj[key]) {
      if (value % 2 === 0) {
        newArr.push(value);
      }
    }
  } else {
    return newArr;
  }
  return newArr
}
var output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]