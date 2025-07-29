// Task #5--------------------------------
// Дано ціле число. З’ясувати, чи можна це число отримати шляхом возведення числа 3 в деяку ступінь.
// Наприклад, числа 9, 81 можно отримати, а 13 - ні
const digit = parseInt(prompt('Enter a number'), 10);
const permanentNum = 3;
let numberInPower = 1;
let power = 0;
while (numberInPower < digit) {
    numberInPower *= permanentNum;
    power++;
    if (numberInPower === digit) {
        document.write(`The number ${digit} can be obtained by raising the number 3 to the power ${power}`)
    }
    if (numberInPower > digit) {
        document.write(`The number ${digit} CANNOT be obtained by raising the number 3 to the power ${power}`)
    }
}
