//car object with color property 'black'
let car = {
  color: "black",
};
console.log(car); 

//change color property to 'green'

car.color = "green";
console.log(car);

//add the power property to car

car.power = function () {
  console.log(enginePower);
};

console.log(car);

/*******************************
 * apples and pears sum function
*/
let pears = 4;
let apples = 7;

function accept(pears, apples) {
  return pears + apples;
}

/*******
  tests
*/
const result = accept(pears, apples);
console.log("pears&apples are ", result);

/***************
 * name function
*/
function nameDefine(name) {
  if (name === "John") {
    return "hello," + name;
  } else return "there is no such name. Sorry, " + name;
}

/*******
  tests
*/

const result1 = nameDefine("John");
const result2 = nameDefine("Kumar");
console.log("john is enetered", result1);
console.log("kumar is enetered", result2);


/************ 
 *  fuction calculates the type of argument and output it to the console
*/
let f = function(arg){
    res = typeof arg;
    console.log(res);
    
}

/*******
  tests
*/

f(9)
f("999")
f(true)
f(null)
f(undefined)

/********* 
function determines whether a number is prime or not
********/ 

let prime = function(number) {
    let isPrime = true;
// check if number is equal to 1
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}

// check if number is less than 1
else {
    console.log("The number is not a prime number.");
}
} 

/*******
  tests
*/
prime(3);
prime(4);
prime(5);
prime(6);
prime(7);
prime(8);
prime(9);
prime(11);



