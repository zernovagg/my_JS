/**
 *Closures
 */

function makeFunction() {
  let a = 1;
  return function inner() {
    console.log('a inside inner:', a);
  };
}

const print = makeFunction();

print();

//outer
function makeCounter() {
    let count = 0;

    //closure
    return function() {
        console.log('count:', count);
        return count++;
    };
}
const counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());