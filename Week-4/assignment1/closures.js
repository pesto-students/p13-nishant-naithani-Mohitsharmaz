// Write a program that demonstrates the use of closures in JavaScript...

function counter() {
  var count = 0;
  return function child() {
    count++;
    return count
  };
}

const firstCounter = counter()
const secondCounter = counter()
let firstValues = []
for (let i=0; i<=5;i++){
    firstValues.push(firstCounter())
}
let secondValues =[]
for (let i=0; i<=3;i++){
    secondValues.push(secondCounter())
}
console.log(firstValues, secondValues)


// closures: a function along with its lexical environment is reffered to as closures,
