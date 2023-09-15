function* symbolIterator(array) {
  for (let i = 0; i < array.length; i++) {
    yield Symbol(array[i]);
  }
}

const iterator = symbolIterator(["hello", "World", 'test']);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

