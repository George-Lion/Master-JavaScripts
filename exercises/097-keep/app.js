// Write your function here
const keep =(arr, n)=>{
    let newArr = [];
    if(Array.isArray(arr)){
        for(let value of arr){
            if(value === n){
                newArr.push(value)
            }
        }
    }else{
        return newArr; 
    }
    return newArr
}

var output = keep([1, 2, 3, 2, 1], 2) 
console.log(output);