//destructing and spread

const numbers = [10, 15, 20];

const [num1, num2, num3] = numbers;
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(num1);
console.log(num2);
console.log(num3);

const stack = [
  ["HTML", "CSS", ["JAVASCRIPT", "react"]],
  ["PHP", "MYSQL", "NODEJS"],
];

const [[firstThech, , [library]], backend] = stack;
console.log(firstThech, backend, library);

const back = [1, undefined, 5];
console.log(back[1]);
const [nums1, nums2 = 3, nums3] = back;
console.log(nums2);

const eded = [1,2,4,5,6,13,23,33,45]

const [bir,iki,uc, ...rest] = eded

console.log(bir , iki, uc,  rest);
rest.map((el)=>console.log(el))

const countries = [
    ['aze','baku'],
    ['tr','ankara'],
    ['ge','tbilisi'],
    ['ru','moskva']
]

for ([country,capital] of countries){
    console.log(`olke- ${country} paytaxt- ${capital}`);
}

//object destructing

const user = {
    ad: 'nahid',
    surname:'zerbiyev',
    yas: 20,
    olke:'aze',
    evli:false
}

const {ad,surname:soyad,yas,olke,evli, seher='ismayilli'} = user

console.log(ad);
console.log(soyad);
console.log(seher);


function vurma (elem1,elem2){
    return elem1*elem2
}

console.log(vurma(12,45));

function bolme([num1,num2]){
   return num1/num2
}
const numss = [30,15]
console.log(bolme(numss));


function showUserInfo({ad,surname}){
    return ` men ${ad} ${surname}`
}
console.log(showUserInfo(user));