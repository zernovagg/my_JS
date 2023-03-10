const arrayOfName = ['Alice', 'Lacj', 'Olga', 'Peter', 'Kumar'];
arrayOfName.forEach(name => console.log(name));

arrayOfName.forEach (((nam, index, arr) => {
return console.log(`Index:${index} Value:${nam} Array:${arr}`)
}));