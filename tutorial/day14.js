//error handling


// try {
   
// let name = 'nahid'
// let lastname = 'zarbiyev'
// let fullname = `${name}  ${surname}` 
// console.log(fullname);

// throw new Error('required')
// } catch (error) {
//     console.log(error.message);
//     console.log(error.name);
//     // console.table( error);
// }

let age = prompt('nece yasindasan')

try {
    if (age>29)throw new Error('yalan')
} catch (error) {
    alert('yasiniz yanlisdir')
    console.log(error);
}