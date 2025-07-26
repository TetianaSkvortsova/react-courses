// Task #5-------------------------------------------
// Дано двозначне число. Визначити, яка з його цифр більша - перша чи друга?
let digit = parseInt(prompt('Enter digit'), 10);
console.log('Digit =', digit);
const temp = digit % 10;
digit -= temp;
digit /= 10;

if (digit > temp) {
    console.log('first > second');
} else if (digit < temp) {
    console.log('second > first');
} else {
    console.log('They are equal');
}