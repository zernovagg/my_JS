//In a try catch construction, wrap the code: console.log (a), let a = 3. And display an error - ‘let must be declared’ before use. When running 1/0, the error 'cannot be divided by zero'
try {
  console.log(a); // error, variable is not defined!

  let a = 3;
} catch (err) {
  console.log(`let muust be declared!`);
}

try {
  console.log(1 / 0); // no error
  console.log(
    `no error via compilation, but cannot be divided by zero according to the task`
  );
} catch (err) {
  console.log(`cannot be divided by zero`);
}

/**** 

if (1 / 0) console.log(`cannot be divided by zero`);
else console.log("false");

if (!(1 / 0)) console.log(`cannot be divided by zero`);
else console.log("false");
*/