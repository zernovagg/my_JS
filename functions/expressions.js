const sum = function(a, b) {
    return a + b;
}

const result = sum(5, 10);
console.log('result is:', result);

//not hoisted => the variable should be declared first than called 
/**
 *Immediately Invoked Function Expression (IIFE) 
 */ 

 (function() {
    console.log("Did you call me?");
 }) ()

 // let a = function() {
 //   console.log("Did you call me?");
 //} 
 // a();