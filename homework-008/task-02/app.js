// Task #2----------------
// Створити функцію для розрахунку добутку двох чисел, що викликається так: name(5)(2).
// Функція повинна повертати результат (у середині функції не має бути консоль лога!)
let number1;
let number2;
do {
    number1 = parseInt(prompt('Enter number 1'), 10);
} while (!number1);

do {
    number2 = parseInt(prompt('Enter number 2'), 10);
} while (!number2);

console.log(`number1 = ${number1}, number2 = ${number2}`);

function multiplyCurry(num1) {
    return function (num2) {
        return num1 * num2;
    }
}

console.log(`mul = ${multiplyCurry(number1)(number2)}`);
