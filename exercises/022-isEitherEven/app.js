// Write your function here
const isEitherEven=(num1,num2) =>{

    if(num1 %2 === 0 || num2 %2 === 0){
        return true;
    }else{
        return false;
    }
}
const output = isEitherEven(2, 1);
console.log(output);