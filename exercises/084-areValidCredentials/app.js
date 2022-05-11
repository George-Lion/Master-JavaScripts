// Write your function here
function areValidCredentials(name, pass){
    if(name.length <= 3 && pass.length < 8){
        return false
    }else{
        return true
    }

}


var output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output);