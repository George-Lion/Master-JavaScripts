var obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
function removeNumbersLargerThan(num, obj) {
    // your code here
    for (var key in obj) {                    
        if(obj[key] > num)  
          delete obj[key];                      
      }
    }

removeNumbersLargerThan(5, obj);
console.log(obj); 