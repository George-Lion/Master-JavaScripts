var obj = {
    a: 2,
    b: 'remaining',
    c: 4
};
function removeNumberValues(obj) {
    // your code here
    for(let value in obj){
        if(typeof obj[value] === 'number'){
            if(obj[value]){
                delete obj[value]
            }
        }else {
            obj[value]
        }
         obj[value]
    }
}

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }