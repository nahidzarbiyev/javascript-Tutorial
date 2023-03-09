// truthy value
// all numbers except 0
// all strings except empty string
// boolean true

// falsy
// 0
// 0n
// null
//undefined
//NaN
//boolean false
//'',"",empty string
let a = 4;
let b = 10;
console.log((a += b));
console.log((a -= b));
console.log((a /= b));
console.log((a *= b));
console.log((a %= b));
console.log((a **= b));

// arithmatic  addition(+)
// substriction(-)
//multipliction(*)
// duvusuon(/)
// modulus(%)
//exponential (**)

// comparation values
// ==,===,!=,!==,<,>,<=,>=

// logical operators
console.log(4 > 3 && 5 > 3);
console.log(4 > 3 && 5 < 3);
console.log(4 > 3 || 5 < 3);
console.log(4 < 3 || 5 < 3);
console.log(4 > 3 || 5 > 3);
console.log(!(4 > 3) && !(5 < 3));
console.log(!(4 < 3) && !(5 < 3));

// increments
let count = 0;
console.log(count++);
console.log(count);
let num = 0;
console.log(++num);
console.log(++num);

let dec = 0;
console.log(--dec);
console.log(dec--);
console.log(dec);

// ternary operators

let isRaining = false;

isRaining ? console.log("is raining") : console.log("isn't raining");

// window methods
// alert("welcome")

// console.log(prompt("required text", "hello"))

// let deleted = confirm("silirsen?");
// console.log(deleted ? "silindi" : "silinmedi");

// date object

let now = new Date();
console.log(now);

console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getMilliseconds());
console.log(now.getUTCMilliseconds());
console.log(now.getTime());
console.log(now.getMonth());
console.log(now.getFullYear());

const date = new Date()
let year = date.getFullYear()
week = date.getDay(),
ay = date.getMonth(),
gun = date.getDate(),
hour = date.getHours(),
minute = date.getMinutes(),
seconds = date.getSeconds()
let months = [
    'yanvar',
    'fevral',
    'mart',
    'aprel',
    'may',
    'iyun',
    'iyul',
    'avqust',
    'sentyabr',
    'oktyabr',
    'dekabr'
]
let days = [
    'bazarertesi',
    'cersenbe axsami',
    'cersenbe',
    'cume axsami',
    'cume',
    'senbe',
    'bazar'
]

let fullDate = `${gun} ${months[ay]}  ${year} ${days[week]}  ${hour}:${minute}:${seconds}`
console.log(fullDate);