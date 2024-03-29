const num1 = 31;
const num2 = 2;

const multiply = (num1, num2) => num1 * num2;

console.log(multiply(num1, num2) === 62);

  // Generate a random integer greater than 0
const random = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1;
console.log(random);

const num3 = 34;
const num4 = 5;

// Create a variable called mod representing the equation
const mod = num3 % num4;
console.log(mod === 4); 

const numbers = [10, 5, 20, 15];
const max = Math.max(...numbers);
console.log(max === 20);
