// Protecting the object
var person = Object.defineProperties(
  {},
  {
    name: { value: "Mohit", writable: false },
    age: { value: 23, writable: true },
    email: { value: "mohit@gnxgropu.org", writable: false },
  }
);
person["getAge"] = function () {
  return this.age;
};
person["setAge"] = function (age) {
  this.age = age;
  return age;
};
person.setAge(100);

console.log(person.getAge());

// Javascript Prototype
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  getDetails() {
    return `${this.make} ${this.model} ${this.year}`;
  }
}

class Car extends Vehicle {
  constructor(make, model, year, doors) {
    super(make, model, year);
    this.numDoors = doors;
  }
  getDetails() {
    return `${this.make} ${this.model} ${this.year} ${this.numDoors}`;
  }
}

let Bmw = new Car(2022, "BMW Z4", 2021, 2);
console.log(Bmw.getDetails());
