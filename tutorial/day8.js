ad = "nahid";
// console.log(window.ad);

let name = "nahid";
let surname = "zarbiyev";

function letsLearnscope() {
//   console.log(name, surname);
  if (true) {
    let name = "tural";
    let surname = "eliyev";
    // console.log(name, surname);
  }
//   console.log(name, surname);
}
letsLearnscope();
// console.log(name, surname);

//objects
const person = {
  firstName: "nahid",
  lastName: "zarbiyev",
  'phone number': 03336,
  age: 20,
  city: "baku",
  test:{
    surname: 'eliyev'
  },
  skills: ["HTML", "CSS", "JS"],
  getfullName: function() {
    return `${this.firstName} ${this.lastName}`
  }

};


console.log(person.firstName);

console.log(person.test.surname);
console.log(person.skills[1]);
console.log(person['phone number']);
console.log(person.getfullName());

person.skills.push("react", 'tailwind')
console.log(person.skills);

person.getPersonInfo = function() {
    let skillsWithoutLastOne = this.skills.splice(this.skills.length-1).join('')
    let lastSkill  = this.skills.at(-1)
    console.log(lastSkill);
}
// console.log(person.getPersonInfo());




// let newPerson = person // referans kopyalanma
// console.log(newPerson);

let newPerson = Object.assign({}, person) 

let newPerson2 = {...person}

console.log(newPerson);

person.age = 21
console.log(newPerson);
console.log(person);

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

for ( let [key, val] of Object.entries(person) ){
    console.log(key, val);
}

console.log(person.hasOwnProperty('lastName'));


// Object.freeze(person) // bele etdikde hec bir deyisiklik etmek mumkun olmur
// Object.seal(person) // bele etdikde deyisiklik etmek mumkundur ama yeni key value elave etmek mumkun olmur