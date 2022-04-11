// Write your function here
const areBothOdd = (num1, num2) =>{

    if(num1 %2 === 1 && num2 %2 === 1){
        return true
    }else{
        return false
    }

}

const output = areBothOdd(1, 3);
console.log(output);