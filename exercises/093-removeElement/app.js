// Write your function here
const removeElement = (arr, num) => {
    let newArr = [];
    if (Array.isArray(arr)) {
        for (let value of arr) {
            if (value !== num) {
                newArr.push(value);
            }
        }
    } else {
        return newArr
    }
    return newArr
}
var output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output);