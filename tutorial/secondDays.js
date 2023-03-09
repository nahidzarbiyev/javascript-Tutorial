// primitive edata-types
let word = "javascripts"; //string
// console.log(word[0]);

let numOne = "2";
let numtwo = 2;
// console.log(numOne==numtwo);
// console.log(numOne===numtwo);
let js = "javascript";
let js2 = "                         javascript         ";
let py = "PYTHON";
// console.log(js==py);
let lightOn = true;
let lightOff = false;
// console.log(lightOn==lightOff);
let numarr = [1, 2, 3];
numarr[0] = 10;
// console.log(numarr);
console.log(Math.PI);
console.log(Math.round(9.5));
console.log(Math.ceil(9.1));
console.log(Math.floor(9.81));
console.log(Math.min(3, 4, 6, 17));
console.log(Math.max(3, 4, 6, 17));
console.log(Math.floor(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.abs(-10));
console.log(Math.sqrt(729));
console.log(Math.pow(729,729)==Math.pow(729,710)); //infinity ==infinity true
console.log(Math.log(100));
console.log(Math.sin(30));
console.log(Math.cos(60));
console.log(Math.tan(45));
console.log(Math.tanh(45));

let name = 'nahid'
let surName = 'zarbiyev'
console.log(name +' ' + surName);
console.log(`${name} ${surName}`);
console.log(surName.length);
console.log(numarr.length);
console.log(surName.toUpperCase());
console.log(py.toLocaleLowerCase());
console.log(js.substr(4,6));
console.log(js.substring(4,9));
console.log(js.split(''));
console.log(js.split('').reverse().join(''));
console.log(js2.trim());
console.log(js.includes('s')); //true
console.log(js.includes('m')); //false

console.log(js.replace('java', 'type'));

console.log(js.charAt(1));
console.log(js.indexOf('a'));
console.log(name.repeat(10));