class Person {

    constructor(firstName, lastName) {
this.firstName = firstName;
this.lastName = lastName;
    }
   
    sayName() {
        console.log(`my name is ${this.firstName} ${this.lastName}`);
    }
}

class CoderJS extends Person {
    constructor(firstName, lastName) {
        super(firstName, lastName);
    }
    code() {
        console.log(`${this.firstName} is coding on JS`);

    }
}
const anna = new CoderJS("Anna", "Dou");
anna.code();
anna.sayName();

const annaz = new Person ("Anna", "Zero");
annaz.sayName();
