'use strict'

// Створіть клас Calculator, який буде мати методи для виконання базових математичних операцій: додавання,
// віднімання, множення та ділення.

class Calculator {

    add(digit_1, digit_2) {
        return digit_1 + digit_2;
    }

    subtract(digit_1, digit_2) {
        return digit_1 - digit_2;
    }

    multiply(digit_1, digit_2) {
        return digit_1 * digit_2;
    }

    divide(digit_1, digit_2) {
        return digit_1 / digit_2;
    }
}

const calc = new Calculator();

console.log(calc.add(5, 3)); // 8

console.log(calc.subtract(10, 4)); // 6

console.log(calc.multiply(3, 6)); // 18

console.log(calc.divide(8, 2)); // 4