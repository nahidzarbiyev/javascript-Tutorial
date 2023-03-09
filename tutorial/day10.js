//SET

const names = new Set(['nahid','tural','vusal'])
names.add("vasif")
names.delete('tural')
console.log(names);
console.log(names.size);


for (const name of names) {
    console.log(name);
}
console.log(names.has('vasif'));
// names.clear()
