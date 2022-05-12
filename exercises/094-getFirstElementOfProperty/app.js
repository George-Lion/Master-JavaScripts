// Write your function here
const getFirstElementOfProperty = (object, key) => {
    let newArr = []
    if (Array.isArray(object[key])) {
        for (let value of object[key]) {
            if (value === value) {
                newArr.push(value)
            }
        }
    }
    else {
        return undefined
    }
    return newArr[0]
}


var obj = {
    key: [1, 2, 4]
};
var output = getFirstElementOfProperty(obj, 'key');
console.log(output);