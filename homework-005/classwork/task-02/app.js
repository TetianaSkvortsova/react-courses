// Task #2--------------------------------
// Вивести на сторінку квадрати чисел від 10 до 20 через кому
let stringOfNumbers = '';
for (let i = 10; i <= 20; i++ ) {
    i < 20 ? stringOfNumbers += `${Math.pow(i, 2)}, ` : stringOfNumbers += `${Math.pow(i, 2)}`;
}
document.write(`<span>${stringOfNumbers}</span>`);
