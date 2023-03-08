/**
 *Arrow functions
 *no keyword 'function'
 * NOT HOISTED (hoist - поднимать = вызывать)
 * have no 'this'
 */ 

 const sum = (a, b) => {
    return a + b;
 }
 const result = sum(4, 8);
 console.log('result is:', result);

 // arrow function can be much shorter

 const sum1 = (a, b) => { return a + b; }
 const sum2 = (a, b) => a + b; 
 const result1 = sum2(5, 25);
 console.log('result1 is:', result1);

//  One argument

const double = a => a * 2;
const result2 = double(10);
console.log('result2 is:', result2);

// Empty arguments

const sayHey = () => console.log('Hey, i am arrow function without argumtnts')
sayHey();


