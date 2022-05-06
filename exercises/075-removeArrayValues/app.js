function removeArrayValues(obj) {
    // your code here
    for (let value in obj) {
        if(typeof obj[value] === 'object'){
            if(Array.isArray(obj[value])) {
                delete obj[value]
            } else {
                obj[value]
            }

        } else {
            obj[value]
        }
    }
}

var obj = {
    a: [1, 3, 4],
    b: 2,
    c: ['hi', 'there']
}
removeArrayValues(obj);
console.log(obj);



