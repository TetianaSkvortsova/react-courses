// Task #3--------------------------------
// Вивести таблицю множення на 7 в форматі (1*7 = 7; 2*7 = 14…)
let multiplicationTable = '';
const multiplier = 7;
for (let i = 1; i <= 10; i++ ) {
    multiplicationTable = i * multiplier;
    document.write(`<p>${i} * ${multiplier} = ${multiplicationTable}</p>`);
}
