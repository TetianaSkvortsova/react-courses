// Task #4------------------------------------------
// Дано число. Визначити, чи закінчується воно парною чи непарною цифрою. Вивести останню цифру в консоль.
const digit = parseInt(prompt('Enter digit'), 10);
const lastNumber = digit % 10;

console.log('You entered:', digit);
console.log(lastNumber % 2 === 0 ? `${lastNumber} is an even number` : `${lastNumber} is an odd number`);
