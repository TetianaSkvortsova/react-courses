// Task #2--------------------------------
// Вивести на сторінку квадрати чисел від 10 до 20 через кому
let stringOfNumbers = '';
for (let i = 10; i <= 20; i++) {
    const square = Math.pow(i, 2);
    stringOfNumbers += i < 20 ? `${square}, ` : `${square}`;
}
document.write(`<span>Squares of numbers from 10 to 20: ${stringOfNumbers}</span>`);
