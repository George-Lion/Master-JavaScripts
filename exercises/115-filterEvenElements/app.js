
function filterEvenElements(arr) {
    // your code here
    const newArr = [];
    for (let value of arr) {
        if (value % 2 === 0) {
            newArr.push(value);
        }
    }
    return newArr;
}

var output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]
