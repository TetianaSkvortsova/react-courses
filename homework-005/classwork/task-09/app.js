// Task #9--------------------------------
// Дано натуральне число (>0). Знайти і вивести на сторінку всі його дільники
// Визначити кількість його парних дільників
// Знайти суму його парних дільників

const digit = parseInt(prompt('Enter a number'), 10);
let evenDivisors = 0;
let sumOfEvenDivisors = 0;
document.write(`<p>Divisors of a number ${digit}:</p> `);
for (let i = 1; i <= digit; i++) {
    if (digit % i === 0) {
        document.write(`<p>${i}</p> `);
        if (i % 2 === 0) {
            evenDivisors++;
            sumOfEvenDivisors += i;
        }
    }
}
document.write(`<p>The number of its even divisors: ${evenDivisors}</p> `);
document.write(`<p>The sum of its even divisors: ${sumOfEvenDivisors}</p> `);
