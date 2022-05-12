// Write your function here

const countAllCharacters = (str) => {
    let newObj = {};

    for (let value of str) {
        if (newObj.hasOwnProperty(value)) {
            newObj[value] += 1;
        } else {
            newObj[value] = 1;
        }
    }

    return newObj;

}







var output = countAllCharacters('banana');
console.log(output);