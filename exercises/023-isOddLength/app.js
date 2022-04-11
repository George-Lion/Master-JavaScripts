// Write your function here

const isOddLength=(word)=>{
    if(word.length %2===1){
        return true;
    }else{
        return false;
    }
}
const output = isOddLength('special');
console.log(output);