// Write your function herevar obj = {

const getElementsThatEqual10AtProperty = (object, key) => {
    let arr = [];
    if (Array.isArray(obj[key])) {
        for (let value of object[key]) {
            if (value === 10) {
                arr.push(value)
            }
        }
    } else {
        return []
    }
    return arr
}


var obj = {
    key: [1000, 10, 50, 10]
};

var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output);