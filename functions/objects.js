const john = {
    name: "John",
    age: 25
}

console.log(john)
console.log(john.name)
console.log(john['age'])

john.lang = "JS";
console.log(john)

delete john.age;
console.log(john)

/** key depend on the user input. Prompt is not working in terminal&&


 let user = {
    name: "John",
    age: 30
  };
  
  let key = prompt("What do you want to know about the user?", "name");
  
  // access by variable
  alert( user[key] ); // John (if enter "name")
  
*/
  


  function makeUser(name, age) {
    return {
      name: name,
      age: age,
      // ...other properties
    };
  }
  
  let user = makeUser("John", 30);
  console.log(user.name); // John