// Task #5--------------------------------
// Знайти добуток всіх цілих чисел від 15 до 35

let mul = 15;
for (let i = 16; i <= 35; i++ ) {
    BigInt(mul *= i);
}
document.write(`<span> Product of numbers 15...35 = ${BigInt(mul)}</span>`);
let x = 2;
let y = ++x;
console.log(x);
console.log(y);
