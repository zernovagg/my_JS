function sum(a, b) {
    return a + b;
}

const result = sum(5, 10);
console.log('result is:', result);

//hoisted => can be called before it is declared

//function with alt values for arguments
function showMessage(from = "no author given", text = "no text given") {
    console.log( from + ": " + text );
  }
  
  showMessage(); // function call without given arguments 
  showMessage("Ann"); // Ann: no text given