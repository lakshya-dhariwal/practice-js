const sum = (a, b) => {
  return a + b;
};
const subtract = (a, b) => {
  return a - b;
};
const multiply = (a, b) => {
  return a * b;
};
const divide = (a, b) => {
  return a / b;
};

const calculator = (operation, a, b) => {
  return operation(a, b);
};

console.log(`sum ${calculator(sum, 5, 2)}`);

console.log(`subtraction ${calculator(subtract, 5, 2)}`);

console.log(`multiplication ${calculator(multiply, 5, 2)}`);

console.log(`divide ${calculator(divide, 5, 2)}`);
