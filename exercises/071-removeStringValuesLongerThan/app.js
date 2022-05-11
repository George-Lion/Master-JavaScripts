function removeStringValuesLongerThan(num, obj) {
    // your code here

    for (let value in obj) {
        if (typeof obj[value] === 'string') {
            if (obj[value].length > num) {
                delete obj[value]
            }
        } else {
            obj[value]
        }
        
    }
    return obj
}

var obj = {
    name: 'Montana',
    age: 20,
    location: 'Texas'
};
removeStringValuesLongerThan(6, obj);
console.log(obj);