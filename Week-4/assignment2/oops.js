// inheritance
class Vehicle {
  constructor(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
  }
  drive() {
    console.log(`Driving ${this.make} ${this.model}`);
  }
}

class Car extends Vehicle {
  constructor(make, model, color, seats) {
    super(make, model, color);
    this.numSeats = seats;
  }
}

class RideShareCar extends Car {
  constructor(make, model, color, seats, isAvl) {
    super(make, model, color, seats);
    this.isAvailable = isAvl;
  }
}

const mustang = new Car(2022, "BMW Z4", "black", 2);
const sharedCar = new RideShareCar(1998, "Mustang GT", "black", 6, "yes");
console.log(mustang.numSeats);
console.log(sharedCar.isAvailable);

// Polymorphism
class Shape {
  calculateArea() {
    return "i am going to be overridden";
  }
}
//  rectangle Instance
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  calculateArea() {
    return this.width * this.height;
  }
}
const recc = new Rectangle(12, 12);
console.log(recc.calculateArea());

// triangle instance
class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }
  calculateArea() {
    return (this.base * this.height) / 2;
  }
}
const tri = new Triangle(12, 12);
console.log(tri.calculateArea());

// circle instance
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}
const circl = new Circle(12);
console.log(circl.calculateArea());

// Abstraction and encapsulation ; (Pending ; this need TBD)

class BankAccount {
    #accountNumber;
    #balance;
    #accountHolderName;
    constructor(accountNumber, balance, accountHolderName) {
        this.#accountNumber = accountNumber;
        this.#balance = balance;
        this.#accountHolderName = accountHolderName;
      }
}

class CheckingAccount extends BankAccount {
    constructor(accountNumber, balance, accountHolderName) {
      super(accountNumber, balance, accountHolderName);
    }
  
    deposit(amount) {
    //   this.#balance += amount;
    }
  
    withdraw(amount) {
    //   this.#balance -= amount;
    }
  
    getBalance() {
    //   return this.#balance;
    }
  }

const checkingAccount = new CheckingAccount('123', 1000, "mohit")
console.log(checkingAccount.balance)


class SavingsAccount extends BankAccount{
    #accountNumber;
    #balance;
    #accountHolderName;
    constructor(accountNo, balance, name){
        super(accountNo, balance, name)
        
    }
}
