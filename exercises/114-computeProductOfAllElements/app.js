function computeProductOfAllElements(arr) {
    // your code here
    if(arr.length == 0){
        return 0;
    }else{
        let multy = 1;
        for(let value of arr){
            if(value){
                multy = multy * value;
            }
        }
        return multy
    }  
}

var output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60