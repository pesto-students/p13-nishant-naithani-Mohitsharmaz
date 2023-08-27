const draw = (size) => {
  let string = "";
  for (i = 0; i <= size; i++) {
    for (let j = 0; j < i; j++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
};
draw(5);
