// Write your function here
const getOddLengthWordsAtProperty = (object, key) => {

    let newArr = [];
    if (Array.isArray(object[key])) {
        for (let value of object[key]) {
            if (value.length % 2 === 1) {
                newArr.push(value)
            } else {
                newArr
            }
        }
    } else {
        return newArr
    }
    return newArr
}





var obj = {
    key: ['It', 'has', 'some', 'words']
};

var output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output);