// Write your function here
const isSameLength = (letter1, letter2) =>{
    if(letter1.length == letter2.length){
        return true;
        
    }else{
        return false;
    }
}

const output = isSameLength('words', 'super');
console.log(output);
