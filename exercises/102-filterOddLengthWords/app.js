function filterOddLengthWords(words) {
    // your code here
    let newArr = [];
    if (Array.isArray(words)) {
        for (let value of words) {
            if (value.length % 2 === 1) {
                newArr.push(value);
            }
        }
    } else {
        return newArr;
    }
    return newArr;
}

var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']