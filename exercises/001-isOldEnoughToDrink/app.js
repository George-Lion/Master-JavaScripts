function isOldEnoughToDrink(value) {
    // your code here	
    if (value < 21) {
        return (false);
    }
    else {
        return (true);
    }
}

let output = isOldEnoughToDrink(21);
console.log(output);