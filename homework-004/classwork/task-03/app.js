// Task #3------------------------------------------
// Визначити, чи є число а дільником числа b. І навпаки, якщо число а більше за b.
const a = parseInt(prompt('Enter number 1'));
const b = parseInt(prompt('Enter number 2'));

if (a < b) {
    console.log(b % a === 0 ? 'YES' : 'NO');
} else {
    console.log('a > b')
    console.log(a % b === 0 ? 'YES' : 'NO');
}