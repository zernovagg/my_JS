class Person {
    name = 'John Dou';
    say() {
        console.log(`my name is ${this.name}`);
    }
}

const john = new Person();

john.say();