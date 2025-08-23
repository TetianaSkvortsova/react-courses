// Task #2--------------------------------
// Маєте масив чисел. Використовуйте вже існуючі методи масиву для створення нового масиву, в якому лише парні числа з оригінального масиву.
'use strict'

const arr = [1, 46, 15, 45, 2, 7, 8, 10, 44];

const evenNumbersEx = arr.filter((item) => (item % 2) === 0)

const showEvenNumber = function (arr) {
    arr.forEach((value) => {
        console.log(value);
    })
}

showEvenNumber(evenNumbersEx);
