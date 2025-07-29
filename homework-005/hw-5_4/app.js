// Task #5-4--------------------------------
// Дано ціле число (ввести через 'prompt'). З'ясувати, чи просто воно (простим називається число, більше 1, що не має інших дільників, крім 1 і себе).
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
