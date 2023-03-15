//Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'
let str = 'ahb acb aeb aeeb adcb axeb';
let regexp = /a.b/g;

console.log(str.match(regexp));

//Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest
let strn = '2 + 3 223 2223';
let regexp2 = /\b2\s\+\s3\b/g;

console.log(strn.match(regexp2));


//Get the day, month and year of the current date and output it to the console separately

let date = new Date();
console.log("The year is ",date.getFullYear());
console.log("The month is ",date.getMonth());
console.log("The day is",date.getDate());