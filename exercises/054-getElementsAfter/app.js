function getElementsAfter(array, n) {
  // your code here
  result = array.slice(n +1)
  return result
}
var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output);