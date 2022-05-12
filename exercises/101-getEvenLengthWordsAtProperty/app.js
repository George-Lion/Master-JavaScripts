var obj = {
  key: ['a', 'long', 'game']
};
function getEvenLengthWordsAtProperty(obj, key) {
  // your code here
  let newArr = [];
  if (Array.isArray(obj[key])) {
    for (let value of obj[key]) {
      if (value.length % 2 === 0) {
        newArr.push(value)
      }
    }
  }else{
    return newArr;
  }
  return newArr;
}
var output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']