// Write your function here
const getElementsGreaterThan10AtProperty = (object, key) => {

    let newArr = [];
    if (Array.isArray(object[key])) {
        for (let value of object[key]) {
            if (value > 10) {
                newArr.push(value);
            }
        }
    } else {
        return newArr
    }
    return newArr;
}



var obj = {
    key: [1, 20, 30]
};
var output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output);