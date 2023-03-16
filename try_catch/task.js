//In a try catch construction, wrap the code: console.log (a), let a = 3. And display an error - ‘let must be declared’ before use. When running 1/0, the error 'cannot be divided by zero'
try {
  console.log(a); // error, variable is not defined!

  let a = 3;
} catch (err) {
  console.log(`let muust be declared!`);
  //console.log(err.name);
  //console.log(err.message);
  //console.log(err.stack);
}

let a = 1;
let b = 0;

try {
  
  if (b === 0) {
    throw new SyntaxError("cannot be divided by zero"); // (*)
  }
 
} catch (err) {
  console.log("cannot be executed, the reason is:  " + err.message);
} finally {  console.log(a / b); // no error
             console.log(  `no error via compilation, but division by zero should be catched according to the task`);
            }


