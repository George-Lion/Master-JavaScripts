var obj = {
  key: [2, 1, 5]
};
function getSmallestElementAtProperty(obj, key) {

  if (obj[key] === undefined || Array.isArray(obj[key]) === false || obj[key].length < 1 || obj[key] === {}) {
    return [];
  } else {
    let element = obj[key][0];
    for (let value in obj[key]) {
      if (obj[key][value] < element) {
        element = obj[key][value];
      }
    }
    return element;
  }
  
}
var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1