// Write your function here
const findMinLengthOfThreeWords =(str1, str2, str3)=>{

        result = Math.min(str1.length,str2.length,str3.length)
        return result 
}

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output);