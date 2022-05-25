var obj = {
  key: [1, 2, 3]
};
function getAllButLastElementOfProperty(obj, key) {
    // your code here
    run = [];
    if(!Array.isArray(obj[key]) || obj[key] === []){
      return [];
    }else{
      for(let value of obj[key]){
          run.push(value)
      }
      return run.splice(-3, 2)
    }
    
}

var output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]