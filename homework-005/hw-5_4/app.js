// Task #5-4--------------------------------
// Дано ціле число (ввести через 'prompt'). З'ясувати, чи просто воно (простим називається число, більше 1, що не має інших дільників, крім 1 і себе).
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
