// Write your function hereconst 
const getLastElementOfProperty = (object, key) => {

    if (Array.isArray(object[key])) {
        return object[key].pop()
    } else {
        undefined
    }

}

var obj = {
    key: [1, 2, 5]
};
var output = getLastElementOfProperty(obj, 'key');
console.log(output);