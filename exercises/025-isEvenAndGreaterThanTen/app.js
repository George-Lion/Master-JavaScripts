// Write your function here
const isEvenAndGreaterThanTen=(num)=>{

    if(num %2===0 && num > 10){
            return true;
    }else{
        return false;
        
    }

}

const output = isEvenAndGreaterThanTen(13);
console.log(output);