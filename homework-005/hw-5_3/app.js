// Task #5-3--------------------------------
// Дано ціле число N (ввести через prompt). Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N
const digit = parseInt(prompt('Enter a digit'), 10);
for (let i = 1; i <= 100; i++) {
    const square = Math.pow(i, 2);
    if (square < digit) {
        document.write(`<p>${i}</p>`);
    }
}
