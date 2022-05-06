function getElementsUpTo(array, n) {
  // your code here
  result = array.slice(0, n)
  return result 
}

var output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output);