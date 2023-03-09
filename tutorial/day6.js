


//for loop
// for (let i = 0; i < 10; i++) {
// let count = 100
// count += i
// console.log(i*i);

  
// }

const namesarr= ['lorem','ipsum','dolor','amet']
for (let i = 0; i < namesarr.length; i++) {
    console.log(namesarr[i]);
    
}

let sum = 0
const nums = [1,2,4,34,2,45]
for (let i = 0; i < nums.length; i++) {
    sum+=nums[i]
}
console.log(sum);

// while /do while
let i = 0
while (i<=10) {
    console.log(i);
    i++
}

// let b = 3
// while (b<namesarr.length) {
//     console.log("ad", namesarr[i]);
// i++
// if (b==4) {
//     break
// }
// }



for (const name of namesarr) {
    console.log(name.toLocaleUpperCase());
}
for (let i = 0; i < 10; i++) {
if (i == 4) {
    console.log('4 yoxdu');
    continue
}
    console.log(i);
}
for (let i = 0; i < 10; i++) {
    if (i == 4) {
        break
    
    }
        console.log(i);
    }