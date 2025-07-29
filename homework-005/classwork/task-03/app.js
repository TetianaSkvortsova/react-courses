// Task #3--------------------------------
// Вивести таблицю множення на 7 в форматі (1*7 = 7; 2*7 = 14…)
const multiplier = 7;
for (let i = 1; i <= 10; i++ ) {
    const result = i * multiplier;
    document.write(`<p>${i} * ${multiplier} = ${result}</p>`);
}
