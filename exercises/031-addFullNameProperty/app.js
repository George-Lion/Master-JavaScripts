function addFullNameProperty(obj) {
  // tu codigo aqui
return Object.assign(obj,person2);

}

var person = {
  firstName: 'Jade',
  lastName: 'Smith'
};

var person2 ={
  fullName:'Jade' + " " + 'Smith'
}

addFullNameProperty(person);
console.log(person.fullName);