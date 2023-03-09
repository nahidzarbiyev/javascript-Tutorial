// classes
// class Person {
//   constructor(firstName, lastName,age= 25, country, city) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age
//     this.country = country
//     this.city = city
//   }
// }

// class methods

class Person {
  constructor(firstName, lastName,age= 25, country, city) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age
      this.country = country
      this.city = city
      this.skills = []
    }
    getFullName(){
        const fullName = this.firstName + " " + this.lastName
        return fullName
    }
    // getter
    get getSkills(){
    return this.skills
    }
    appendSkill(skill){
        this.skills.push(skill)
    }
    // setter
    set setSkill(skill){

        this.skills.push(skill)

    }
    getPersonInfo(){
        let fullName = this.getFullName()
        let skills = this.skills.length >0 ? ` bacariqlarim bunlaardir: ${this.skills.join(', ')}`: null
        return ` menim adim ${fullName} ve ${this.age} yasindayam. ${this.country } olkesinde yasayiram ${skills}`
    }
    static seher(){
        return "baki"
    }
}

// const person = new Person("Nahid", "Zarbiyev",20, 'Aze', 'ismayilli');
// const person2 = new Person("Vahid", "Zarbiyev", undefined, 'Az', 'Baku');
// const person3 = new Person("Natiq", "Zarbiyev", 17, 'Tr', 'Adana');
// console.log(person.firstName);
// console.log(person,person3, person2);
// // getter
// console.log(person.getFullName());
// console.log(person.getSkills)
// // setter

// person.setSkill = 'js'
// person.setSkill = 'css'

// console.log(person.getSkills)
// person2.appendSkill('Data')
// console.log(person2.skills);

// console.log(person2.getPersonInfo())

// console.log(Person.seher());




// inheritence miras almaq

class People extends Person{
    ad(){
        return 'zerbiyev nahid'
    }
}



const person1 = new Person('Nahid', 'Zarbiyev', 25, 'Aze', 'Ism')
const people1 = new People('X','Y',12, 'tr', 'ism')

console.log(people1.ad());

