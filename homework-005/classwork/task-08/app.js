// Task #8--------------------------------
// Вивести всі числа в діапазоні від 100 до 200, які кратні 3
document.write(`All numbers in the range from 100 to 200 that are multiples of 3: <br>`);
for (let i = 100; i <= 200; i++ ) {
    if (i % 3 === 0) {
        document.write(`<span>${i}</span> `);
    }
}
