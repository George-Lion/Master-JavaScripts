// Write your function here
const getNthElementOfProperty = (object, key, n) =>{
    
    if(object[key] === undefined){
        return undefined
      } else if(Array.isArray(object[key]) === false){
        return undefined
      }   
      return object[key][n];
}

var obj = {
    key: [1, 2, 6]
  };
  var output = getNthElementOfProperty(obj, 'key', 1);
  console.log(output);