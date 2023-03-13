class Person {

    constructor(firstName, lastName) {
this.firstName = firstName;
this.lastName = lastName;
    }
   
    sayName() {
        console.log(`my name is ${this.firstname} ${this.lastname}`);
    }
}

const john = new Person("John", "Dou");
const anna = new Person("Anna", "Dou");
console.log(john);
console.log(anna);