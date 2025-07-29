// Task #1--------------------------------
// Вивести числа від 20 до 30 через пробіл використовуючи крок 0,5 (20 20,5 21 21,5….)
document.write(`Numbers from 20 to 30 step 0.5 <br>`);
for (let i = 20; i <= 30; i += 0.5) {
    document.write(`<span>${i} </span>`);
}
