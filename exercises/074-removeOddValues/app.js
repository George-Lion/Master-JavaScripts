function removeOddValues(obj) {
    // your code here
    for(let value in obj){
        if(typeof obj[value] === 'number'){
            if(obj[value] %2 === 1){
                delete obj[value]
            }else{
                obj[value]
            }
        }
        else{
            obj[value]
        }
    }

}

var obj = {
    a: 2,
    b: 3,
    c: 4,
  };
  removeOddValues(obj);
  console.log(obj);