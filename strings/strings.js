const testStr = 'This is my test string';
console.log(testStr[0]);
console.log(testStr.charAt(0));
console.log(testStr.length);

// The slice() method extracts a section of a string and
// returns it as anew string, without modifying the original string.

const sliced = testStr.slice(0,4);
console.log("sliced from 0 to 4");
console.log(sliced);
console.log(testStr);

// The trim() mehtod removes whitespace from both ends of a string.
// Whitespace in this context is all the whitespace characters
//(space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.)
const testStrSpaces = '      This is my test string'     ;
console.log(testStrSpaces);
const trimmed = testStrSpaces.trim();
console.log("trimmed");
console.log(trimmed);


console.log("Upper and Lowercase string transformation method");
const testStrUpLow = 'This is MY TEST string';
console.log(testStrUpLow.toUpperCase());
console.log(testStrUpLow.toLowerCase());

//The match() method retrieves the result of matching a string against a regular expression.

const testStrMatch = 'This Is MY TEST string';

const re = /is/gi;
console.log(testStrMatch.match(re));

const testStrReplace = "JAVA JS .NET JS JAVA java";
console.log("the test strings is: ", testStrReplace);
console.log(testStrReplace.replace(/JAVA/gi, "JS"));





