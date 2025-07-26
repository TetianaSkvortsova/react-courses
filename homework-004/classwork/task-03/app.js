// Task #3------------------------------------------
// Визначити, чи є число а дільником числа b. І навпаки, якщо число а більше за b.
const a = parseInt(prompt('Enter number 1'));
const b = parseInt(prompt('Enter number 2'));

if (a < b) {
    console.log(b % a === 0 ? 'Number a is a divisor of number b' : 'Number a is NOT a divisor of number b');
} else {
    console.log('a > b')
    console.log(a % b === 0 ? 'Number b is a divisor of number a' : 'Number b is NOT a divisor of number a');
}