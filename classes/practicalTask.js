class Animal {
  constructor(name) {
    this.name = name;
  }
  move() {
    console.log(`${this.name} is running`);
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }
  miu(){
    console.log(`${this.name} is miuing`);
  }
}

const barsik = new Cat("Barsik");
barsik.move();
barsik.miu();

let animal_proto = {
    eats: true,
    move() {
      console.log("Animal walk");
    }
  };
  
  let cat_proto = {
   
    __proto__: animal_proto
  };

cat_proto.move();

