// Task #4--------------------------------
// Дано ціле число. З’ясувати, чи є воно простим
// Простим називається число, яке більше 1 та яке не має жодних інших дільників окрім 1 і самого себе). Наприклад, 5, 7, 13…
const digit = parseInt(prompt('Enter a digit'), 10);

if (digit >= 1 && digit <= 3) {
    document.write(`${digit} is a prime number`);
} else if (digit > 0) {
    let i = 2;

    while (i < digit) {
        const rest = digit % i;
        i++;
        if (rest === 0) {
            document.write(`${digit} is NOT a prime number`);
            break;
        }
    }
    if (i === digit) {
        document.write(`${digit} is a prime number`);
    }
}
