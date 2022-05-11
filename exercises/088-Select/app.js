// Write your function here
const select = (array, object) =>{

    let arr = {};
    for(let value of array){
        if(value === Object.keys(object) ){
            arr = object
            
        }
        return arr
    }
   
}

var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

var output = select(arr, obj);
console.log(output);