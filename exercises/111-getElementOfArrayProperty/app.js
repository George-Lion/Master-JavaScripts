var obj = {
 key: ['Jamil', 'Albrey']
};
function getElementOfArrayProperty(obj, key, index) {
    // your code here
    if(!Array.isArray(obj[key]) || obj[key].length == 0){
        return undefined;
    }else{
        for(let value of obj[key]){
            if(obj[key].indexOf(value) === index){
                return value
            }else{
                return undefined
            }
        }
    }
}

var output = getElementOfArrayProperty(obj, 'key', 0); 
console.log(output); 