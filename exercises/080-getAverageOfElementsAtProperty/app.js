// Write your function here
function getAverageOfElementsAtProperty(obj, key){
    
    var sum = 0;
    var average = 0;
    var length = obj[key].length;
    
    if (Array.isArray(obj[key]) === false || (obj.hasOwnProperty(key) === false) || ( length === 0 )){
      return 0;
    }
    
    for( var prop in obj[key] ) {
      sum += obj[key][prop];
    }
    
    average = sum / length;
    return average;
  } 
       

var obj = {
    key: [1, 2, 3]
  };
  var output = getAverageOfElementsAtProperty(obj, 'key');
  console.log(output);