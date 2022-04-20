function isPersonOldEnoughToDrinkAndDrive(person) {
  // the person object contains an "age" property inside
  // your code here
 
    if(person.age <= 23 && person.age >= 16){
      return false;
    } else 
    
    return true;

    }

var obj = {
  age: 45
};

var output = isPersonOldEnoughToDrinkAndDrive(obj);
console.log(output);