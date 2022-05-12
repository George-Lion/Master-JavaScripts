var obj = {
  key: [2, 1, 5]
};

function getSquaredElementsAtProperty(obj, key) {
    // your code here
    let newArr = [];
    if(Array.isArray(obj[key])){
      for(let value of obj[key]){
        newArr.push(value * value);
      }
    }else{
      return newArr;
    }
    return newArr;
}

var output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]