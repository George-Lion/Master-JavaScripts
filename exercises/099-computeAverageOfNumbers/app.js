// Write your function here
const computeAverageOfNumbers = (arr) => {
    let sum = 0;
    for (let value of arr) {
        sum += value;
    }

    if (sum !== 0) {
        return sum / arr.length
    } else {
        return 0;
    }

}

var input = [1, 2, 3, 4, 5];
var output = computeAverageOfNumbers(input);
console.log(output);