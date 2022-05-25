function getLengthOfLongestElement(arr) {
    // your code here
    let longString = "";
    if (arr != 0) {
        for (let value of arr) {
            if (Math.max(value.length)) {
                longString = value.length;
            }
        }
        return longString

    } else {
        return 0;
    }



}

var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5