// Task #7--------------------------------
// Вивести суму тільки парних чисел в діапазоні від 30 до 80

let sum = 0;
for (let i = 30; i <= 80; i++ ) {
    if (i % 2 === 0) {
        sum += i;
    }
}
document.write(`<span> Sum of even numbers 30...80 = ${sum}</span>`);
