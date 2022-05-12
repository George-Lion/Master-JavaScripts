function filterEvenLengthWords(words) {
    // your code here
    let newArr = [];
    if (Array.isArray(words)) {
        for (let value of words) {
            if (value.length % 2 === 0) {
                newArr.push(value);
            }
        }
    } else {
        return newArr;
    }
    return newArr;
}

var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']