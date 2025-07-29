// Task #4--------------------------------
// Дано ціле число. З’ясувати, чи є воно простим
// Простим називається число, яке більше 1 та яке не має жодних інших дільників окрім 1 і самого себе). Наприклад, 5, 7, 13…
const digit = parseInt(prompt('Enter a digit'), 10);
let rest = 0;
let i = 2;
if (digit === 1) {
    document.write(`${digit} is a prime number`);
}
if (digit > 1) {
    while (i < digit) {
        rest = digit % i;
        i++;
        if (rest === 0) {
            document.write(`${digit} is NOT a prime number`);
            break;
        }
    }
    if (rest) {
        document.write(`${digit} is a prime number`);
    }
}
