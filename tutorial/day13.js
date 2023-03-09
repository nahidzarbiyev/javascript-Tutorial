// console.log("console log");
// console.log([1,2,3]);
// let age = 29
// console.log('%d yasindayam %d ilinde doguldum %s',age,2003,"bio");


// console.log('%cDUR', 'font-size:60px; color:green;font-family:arial; text-shadow:0 0 100px rgba(255,255,255, 1)' );

// console.warn('this is a warning');
// console.error('error mesaji');

// const user = {
//     ad: 'nahid',
//     surname:'zerbiyev',
//     yas: 20,
//     olke:'aze',
//     evli:false,
//     child:{
//         ad: 'nahid',
//         surname:'zerbiyev',
//     }
// }

// console.table(user)

// console.log(
//     new Array(10).fill('13').map((val,index)=>index)

// );

// // console.time('calculate 1m array')

// // new Array(10e5).fill('13').map((val,index)=>index)

// // console.timeEnd('calculate 1m array')

// console.assert(4>3, "true")
// console.assert(4<3, "false")

// console.grup();

const names = ['Asabeneh', 'Brook', 'David', 'John']
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.group('Names')
console.log(names)
console.groupEnd()

console.group('Countries')
console.log(countries)
console.groupEnd()

console.group('Users')
console.log(user)
console.log(users)
console.groupEnd()

const func = () => {
    console.count('Function has been called')
  }
  func()
  func()
  func()
  func()
  func()
  func()
  func()
  func()
//   console.clear();