let names = Array(8).fill('div')
console.log(names);

let names2 = []

const nums = [1,2,3,4,5]
const fruits = ['apple','banana','blueberry',]
const bio = ['nahid', 20, 'zarbiyev', true, null ,{city:'azerbaycan'}]
console.log(bio);
console.log(bio[5].city);

console.log(fruits);
fruits[2] = 'strawberry'
console.log(fruits);
let surname = 'zarbiyev'
let num1 = [1,2,3]
let num2 = [4,5,6, num1]
let num3 = num1.concat(num2)
console.log(num3);

console.log(num1.indexOf(10)); //-1
console.log(fruits.includes("apple"));//true
console.log(fruits.includes("Apple"));//false

console.log(Array.isArray(fruits));
console.log(Array.isArray(surname));
console.log(fruits.toString());
console.log(fruits.join('-'));
console.log(fruits.slice(0,1));
// console.log(fruits.splice(0,2,"nahid","vahid"));
// console.log(fruits);
fruits.push('flag')
console.log(fruits);

// fruits.pop()
// console.log(fruits);

fruits.shift()
console.log(fruits);
fruits.unshift("table")
console.log(fruits);

console.log(fruits.sort())

let numarray = [1,4,23,2,34,12,5]

console.log(numarray.sort((a,b)=>a-b));

let flatarr= [1,2,3,[2,3,4,3]]
console.log(flatarr.flat());
