//High order FUnction

//Callback

const callBack = (n) => {
  return n ** 2;
};

function cube(callBack, n) {
  return callBack(n) * n;
}

console.log(cube(callBack, 3));

//returning function

const a = (s1) => {
  const b = (s2) => {
    const c = (s3) => {
      return s1 + s2 + s3;
    };
    return c;
  };
  return b;
};
console.log(a(5)(10)(20));

//foreach callback function alir

// const numbers = [1,3,4,5,31,45]
// numbers.forEach(element => {
//     console.log(element);
// });

//SETTING TIME

// setInterval

function SayHello() {
  console.log("hello");
}

// setInterval(() => {
//     SayHello()
// }, 2000)
//

//SETTIMEOUT
// console.log(

// setTimeout(() => {
//     SayHello()
// }, 3000)
// );

// const interval = setInterval(() => {
//     console.log("hello");
// }, 1000);

// const timeOut = setTimeout(() => {
//     clearInterval(interval)
//     console.log("interval lev edildi");
// }, 5000);

// setTimeout(() => {
//     clearTimeout(timeOut)
//     console.log("timeout legv edildi, intervl davam edecek");
// }, 3000);

//FUNCTIONAL PROGRAMMING

//FOREACH, MAP, FILTER, REDUCE, FIND, EVERY, SOME, SORT

let users = [
  {
    id: 1,
    name: "nahid",
    age: 20,
    gender: 1,
  },
  {
    id: 2,
    name: "vahid",
    age: 21,
    gender: 1,
  },
  {
    id: 3,
    name: "zahid",
    age: 22,
    gender: 1,
  },
  {
    id: 4,
    name: "ayan",
    age: 23,
    gender: 2,
  },
];

//FOREACH

const numbers = [1, 3, 4, 5, 31, 45];
numbers.forEach((element, index) => {
  console.log(index, element);
});

let user = users.map((el) => {
  // console.log(el);
  if (el.id === 2) {
    el.name = "tural";
  }
  return el;
});
console.log(user);

///MAP

const mapNumber = numbers.map((el) => el * 2);

console.log(mapNumber);

//FILTER
console.log(numbers.filter((num) => num > 20 && num < 40));

const women = users.filter((gen) => gen.gender === 2);
const men = users.filter((gen) => gen.gender === 1);

console.log(women);
console.log(men);

//REDUCE


let sum = numbers.reduce((oldValue,currentValue)=>oldValue+currentValue,0)
console.log(sum);

//EVERY


console.log(
    users.every(el=>el.gender===1)
);

//SOME
console.log(
    users.some(el=>el.gender===1)
);


//FIND


console.log(numbers.find(el=>el>25));

//SORT

let sortarr = ['nahid','tural','aqsin','musa']

let sorting = sortarr.sort()
console.log(sorting);

// let sortnum = numbers.sort() //false
// console.log(sortnum);

let sortnum = numbers.sort((a,b)=>a-b)
console.log(sortnum);

let sortza = sortarr.sort((a,b)=>b.localeCompare(a))
console.log(sortza);