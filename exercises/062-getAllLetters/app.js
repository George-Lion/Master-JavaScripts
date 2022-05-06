function getAllLetters(str) {
    // your code here
    arr = []
    for (value of str){
        arr.push(value)
    }
    return arr
}

var output = getAllLetters('Radagast');
console.log(output);