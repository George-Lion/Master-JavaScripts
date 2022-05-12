function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  let sum = 0;
  if (Array.isArray(obj[key])) {
    for (let value of obj[key]) {
      sum += value
    } if (sum !== 0) {
      return sum / obj[key].length
    } else {
      return 0
    }
  } else {
    return 0
  }
}

var obj = {
  key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output);