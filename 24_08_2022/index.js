class Person {
  constructor(name) {
    this.setName(name);
  }
  get Name() {
    return this.name;
  }
  set Name(newName) {
    newName = newName.trim();
    if (newName === "") {
      throw "The name cannot be empty";
    }
    this.name = newName;
  }
}

let user = {
  name: "Alex",
};

let descriptor = Object.getOwnPropertyDescriptor(user, "name");

// console.log(JSON.stringify(descriptor, null, 2));

let user2 = {};

Object.defineProperty(user2, "name", {});

let descriptor2 = Object.getOwnPropertyDescriptor(user2, "name");

// console.log(JSON.stringify(descriptor2, null, 2));

let user3 = {
  name: "Alex",
};

Object.defineProperty(user3, "name", {
  writable: false,
});

user3.name = "Anna";

//console.log(user3);

let user4 = {};

Object.defineProperty(user4, "name", {
  value: "Alex",
  enumerable: true,
  configurable: true,
  writable: true,
});

// console.log(user4.name);
// user4.name = "Anna";
// console.log(user4);

let user5 = {
  name: "Alex",
};

Object.defineProperty(user5, "toString", {});

let descriptor5 = Object.getOwnPropertyDescriptor(user5, "name");
// console.log(JSON.stringify(descriptor5, null, 2));

let user6 = {
  name: "Alex",
  age: 20,
  city: "Sydney",
  toString() {
    return `${this.name}_${this.age}_${this.city}`;
  },
};

Object.defineProperty(user6, "toString", {
  enumerable: false,
});

// console.log(Object.keys(user6));

/** -----------------------*/

let user7 = {
  name: "Alex",
};

Object.defineProperty(user7, "name", {
  writable: false,
  configurable: false,
});

user7.name = 2;
// console.log(user7.name);

delete user7.name;

// console.log(user7);

/** -----------------------*/

let user1 = {
  name: "Hello",
  surname: "World",
};
Object.defineProperty(user1, "fullName", {
  set(value) {
    [this.name, this.surname] = value.split(" ");
  },
});
// set fullName is executed with the given value.
user1.fullName = "Joe Doe";
// console.log(user1.name);
// console.log(user1.surname);

/** -----------Inheritance ------------*/

let animal = {
  eats: true,
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

// console.log(Object.keys(rabbit));

for (let prop in rabbit) {
  //   console.log(prop);
}

/** -----------Prototypal Inheritance ------------*/

let Person2 = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

Person2.prototype = {
  toString: function () {
    return this.firstName + " " + this.lastName;
  },
};
var mark = new Person2("Hello", "Work");
console.log(mark.toString());

/**
TASK 1
- Write a Person Constructor that initializes `name` and `age` from arguments.
- All instances of Person should initialize with an empty `stomach` array.
- Give instances of Person the ability to `.eat("someFood")`:
    + When eating an edible, it should be pushed into the `stomach`.
    + The `eat` method should have no effect if there are 10 items in the `stomach`.
- Give instances of Person the ability to `.poop()`:
    + When an instance poops, its `stomach` should empty.
- Give instances of Person a method `.toString()`:
    + It should return a string with `name` and `age`. Example: "Mary, 50"

*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function (food) {
  if (this.stomach.length < 10) {
    return this.stomach.push(food);
  } else {
    return `I can't eat anymore`;
  }
};

Person.prototype.poop = function () {
  return (this.stomach = []);
};

Person.prototype.toString = function () {
  return `${this.name}, ${this.age}`;
};

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/
function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function (gallons) {
  return (this.tank += gallons);
};

Car.prototype.drive = function (distance) {
  let max = this.tank * this.milesPerGallon;
  if (distance < max) {
    this.odometer += distance;
    this.tank -= distance / this.milesPerGallon;
    return `Vehicle has ${this.odometer} miles and ${this.tank} gallons left.`;
  } else if (distance >= max) {
    this.odometer += max;
    this.tank -= max / this.milesPerGallon;
    return `Vehicle ran out of gas after driving ${max} miles. Vehicle now has ${this.odometer} 
      miles on the odometer and ${this.tank} gallons of gas.`;
  } else {
    return `Drive me!`;
  }
};


