function isOldEnoughToDrive(age) {
  // your code here
  if (age < 16) {
    return false;
  }
  else {
    return true;
  }
}
let output = isOldEnoughToDrive(16);
console.log(output);