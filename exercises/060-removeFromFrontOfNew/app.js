function removeFromFrontOfNew(arr) {
    // your code here
    newArray = []
    arr.shift()
    newArray = arr
    return newArray
}

var arr = [1, 2, 3];
var output = removeFromFrontOfNew(arr);
console.log(output); // --> [2, 3]
console.log(arr); 