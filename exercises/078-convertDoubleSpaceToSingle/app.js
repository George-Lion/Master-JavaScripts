function convertDoubleSpaceToSingle(str) {
    // your code here
    
    let result = str.split(' ').filter(words => words !== '').join(' ');
      
    return result
   
}
var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"