let assert = require('assert');

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed}`);
  }

  stop() {
    this.speed = 0;
    console.log(`${this.name}`);
  }
}

/** ----------Overriding a method -------------- */

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides`);
  }
  stop() {
    super.stop();
    this.hide();
  }
}

const animal = new Animal("Doe");
//animal.stop();

const rabbit = new Rabbit("Joe");
//rabbit.stop();

/** ----------Overriding constructor -------------- */

class Car {
  constructor(brand) {
    this.carName = brand;
  }

  present() {
    return `I have a ${this.carName}`;
  }
}

class Model extends Car {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }
  show() {
    return this.present() + `, it is a ${this.model}`;
  }
}

let myCar = new Car("Ford");
// console.log(myCar.present());

let myCar2 = new Model("Tesla", "X");
// console.log(myCar2.show());

/** ----------Static Method -------------- */
class Car2 {
  static gear = 'Test';  
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return `Hello`;
  }
}

let myCar3 = new Car2('Tesla');
// console.log(Car2.gear);
// console.log(myCar3.gear);


/** ----------Static Inheritance -------------- */

class User2 {
    static name = 'Joe'
    static age = 40;
    static sayHi() {
        return `My name is ${this.name}, I am ${this.age}`;
    }
}

class Person extends User2 {}

// console.log(Person.name);
// console.log(Person.sayHi());


/** ----------Public, Protected Access -------------- */

class Human {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log(`My name is ${this.name}`);
    }
}

let person = new Human('Joe');
// person.sayHi();


// Protected Access
class Human2 {
    _name;
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    sayHi() {
        return (`My name is ${this.name}`);
    }
}

let person2 = new Human2("Joe2");
let sayHiResult1 = person2.sayHi();
let sayHiResult2 = person2.sayHi(); 

console.assert(sayHiResult1 === 'My name is Joe2', "Result 1 is incorrect");
console.assert(sayHiResult2 === 'My name is Alex', "Result 2 is incorrect");



// Private Access

class Human3 {
    #name = "Joe";
    constructor(name) {
        this.#name = name;
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }

    sayHi() {
        return (`My name is ${this.name}`);
    }
}

class Student extends Human3 {}


let student1 = new Student("Test1");
console.log(student1.sayHi());
console.log(student1.name);
