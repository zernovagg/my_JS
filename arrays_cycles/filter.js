const arrayOfNumbers = [1,5,2,64,11,42];
const arrayOfEvenNumbers = arrayOfNumbers.filter(currentNumber => currentNumber % 2 === 0);
console.log(arrayOfEvenNumbers);

//forEach and push methods
//const arrayOfMultipliedNumbers = [];
//arrayOfNumbers.forEach((currentNumber) => arrayOfMultipliedNumbers.push(currentNumber*2));

//map method

const arrayOfMultipliedNumbers = arrayOfNumbers.map((currentNumber) => currentNumber*2);
console.log(arrayOfMultipliedNumbers);

