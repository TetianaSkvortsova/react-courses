// Task #1--------------------------------
// Вивести на сторінку в один рядок через кому числа від 10 до 20
let stringOfNumbers = '';
for (let i = 10; i <= 20; i++ ) {
    i < 20 ? stringOfNumbers += `${i}, ` : stringOfNumbers += `${i}`;
}
document.write(`<span>${stringOfNumbers}</span>`);
