// Task #5--------------------------------
// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

function isNumber(arr) {
    const arrayOfNumbers = [];
    for (let i = 0, length = arr.length; i < length; i++) {
        if (!isNaN(arr[i])) {
            arrayOfNumbers.push(arr[i]);
        }
    }
    return arrayOfNumbers;
}

function arithmeticMean(arr) {
    let sum = 0;
    for (let i = 0, length = arr.length; i < length; i++) {
        sum += Number(arr[i]);
    }
    console.log(`Arithmetic Mean = ${sum / arr.length}`);
}

const arr = Array.from(prompt('Enter symbols to delete'));
console.log(`arr -> ${arr}`);
const arrNum = isNumber(arr);
console.log(`arrNum -> ${arrNum}`);
arithmeticMean(arrNum);
