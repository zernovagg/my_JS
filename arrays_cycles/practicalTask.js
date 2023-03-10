//Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console
let movies = ["firstM", "secondM", "Gifted", "Titanic"];
movies.forEach((movie) => console.log(movie));

//Given an array of car manufacturers, convert the array to a string and back to an array
let carManufactures = ["honda", "BMW", "Mustang", "Tesla"];

let string = carManufactures.join("; ");
let array = string.split("; ");

console.log(string);
console.log(array);

//Given an array of the names of your friends, add the words hello to each element of the array
let friends = ["Sveta", "Yolik", "Slava", "Dima"];
let helloFriends = friends.map((friend) => "Hello, " + friend);

console.log(helloFriends);

//Convert numeric array to Boolean

let numbers = [1, 55, -9, 0];
let boolean = numbers.map((item) => Boolean(item));

console.log(boolean);

//Sort the array [1,6,7,8,3,4,5,6] in descending order

let array1 = [1, 6, 7, 8, 3, 4, 5, 6];
let sortedArray1 = array1.sort((a, b) => b - a);

console.log(sortedArray1);

//Filter array [1,6,7,8,3,4,5,6] by value> 3

let array2 = [1, 6, 7, 8, 3, 4, 5, 6];

let filteredArray = array2.filter((value) => value > 3);
console.log(filteredArray);

//Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number

let f = function (arr, number) {
  return arr.indexOf(number);
};

console.log(f(array2, 8));

//?Implement a loop that will print the number 'a' until it is less than 10

for (let a = 0; a < 10; a++) {
  console.log(a);
}

/***********************************************************
 * Implement a loop that prints prime numbers to the console
 */

console.log("PRIME NUMBERS");

let max = 5;

// check for every number from 1 to N
for (let i = 1; i <= max; i++) {
  // check if current number is prime
  if (isPrime(i)) {
    console.log(i);
  }
}

function isPrime(n) {
  // since 0 and 1 is not prime return false.
  if (n == 1 || n == 0) return false;

  // Run a loop from 2 to n-1
  for (let i = 2; i < n; i++) {
    // if the number is divisible by i, then n is not a prime number.
    if (n % i == 0) return false;
  }
  // otherwise, n is prime number.
  return true;
}

/***********************************************************
 * Implement a loop that prints odd numbers to the console
 */

console.log("ODD NUMBERS");

let minOdd = -8;
let maxODD = 8;

// check for every number from 1 to N
for (let i = minOdd; i <= maxODD; i++) {
  // check if current number is odd
  if (isOdd(i)) {
    console.log(i);
  }
}

function isOdd(n) {
  // since 0 is not odd return false.
  if (n == 0) return false;

  if (n % 2 == 0) {
    return false;
  } else return true; // otherwise, n is odd number.
}
