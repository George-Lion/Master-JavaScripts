var obj = {
  key: [1, 2, 4]
};
function getLargestElementAtProperty(obj, key) {
    // your code here
    if(Array.isArray(obj[key]) === false || obj[key] === [] || obj[key] === null){
     return undefined;
      }else{
      for(value of obj[key]){  
        if(value){
          
        }
      }
      return Math.max(value)
    }
    

}
var output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4

