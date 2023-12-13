// calculator class with methods
class Calculator {
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    return a / b;
  }
}

// extented calculator class with some additional methods
class ScientificCalculator extends Calculator {
  square(a) {
    return a * a;
  }
  cube(a) {
    return a * a * a;
  }
  power(a, b) {
    a ** b;
  }
}

let calInst = new ScientificCalculator();
let addition = calInst.add.call({}, 4, 5);
let subtraction = calInst.subtract.apply({}, [10, 5]);

// creating new method to perform BIND

const multipleByTwo = function (a) {
  return a * 2;
};

const powerOfThree = function (a) {
  return a ** 3;
};

let mutipleByTwoInst = multipleByTwo.bind(calInst);
console.log(mutipleByTwoInst(5));
