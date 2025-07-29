// Task #3--------------------------------
// Дано ціле число (N). Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N
const digit = parseInt(prompt('Enter a digit'), 10);
let square = 0;
for (let i = 1; i <= 100; i++) {
    square = Math.pow(i, 2);
    if (square < digit) {
        document.write(`<p>${i}</p>`);
    }
}
