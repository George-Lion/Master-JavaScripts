// Write your function here
const getElementsLessThan100AtProperty = (object, key) => {
    let newArr = [];

    if (Array.isArray(object[key])) {
        for (let value of object[key]) {
            if (value < 100) {
                newArr.push(value)
            }
        }
    }
    return newArr
}


var obj = {
    key: [1000, 20, 50, 500]
};

var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output);