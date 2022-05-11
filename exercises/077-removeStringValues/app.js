function removeStringValues(obj) {
    // your code here
    for(let key in obj){
        if(typeof obj[key] === "string"){
            if(obj[key]){
                delete obj[key]
            }
        }else {
            obj[key]
        }
        obj[key]
    }
    
}

var obj = {
    name: 'Sam',
    age: 20
  }

removeStringValues(obj);
console.log(obj); 