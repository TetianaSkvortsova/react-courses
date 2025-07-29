// Task #6--------------------------------
// Знайти середнє арифметичне всіх цілих чисел від 1 до 500

let sum = 1;
for (let i = 2; i <= 500; i++ ) {
    sum += i;
}
document.write(`<span> Arithmetic mean 1...500 = ${sum / 500}</span>`);
