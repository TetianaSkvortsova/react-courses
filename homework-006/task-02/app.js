// Task #2--------------------------------
const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let sumPosNum = 0;
let sumEvenNum = 0;
let sumOddNum = 0;
let mulPosNum = 1;
let counterPosNum = 0;
let counterNegNum = 0;
let counterOddNum = 0;
let counterEvenNum = 0;
let minElement = arr[0];
let minElementIndex;
let maxElement = arr[0];
let maxElementIndex;
let elementIndex = 0;

document.write(`<p>Output array: ${arr.join(', ')}</p>`)

// Знайти суму і кількість додатних (положительных) елементів.
// Знайти добуток всіх додатних елементів
for (let i = 0, length = arr.length; i < length; i++) {
    if (arr[i] > 0) {
        sumPosNum += arr[i];
        mulPosNum *= arr[i];
        counterPosNum++;
    } else { // Визначити кількість від’ємних (отрицательных) елементів масива
        counterNegNum++;
    }
}

for (let i = 1, length = arr.length; i < length; i++) {
// Знайти мінімальний (найменший) елемент масива і його індекс.
    if (minElement > arr[i]) {
        minElement = arr[i];
        minElementIndex = i;
    }

// Знайти максимальний (найбільший) елемент масива та його індекс
    if (maxElement < arr[i]) {
        maxElement = arr[i];
        maxElementIndex = i;
    }
}

// Знайти кількість непарних додатних  елементів
// Знайти кількість парних додатних елементів
// Знайти суму парних додатних елементів
// Знайти суму непарних додатних елементів
for (let i = 0, length = arr.length; i < length; i++) {
    if ((arr[i] % 2) !== 0 && (arr[i] > 0)) {
        counterOddNum++;
        sumOddNum += arr[i];
    } else if (arr[i] > 0) {
        sumEvenNum += arr[i];
        counterEvenNum++;
    }
}

// Змінити на 0 всі елементи масива окрім найбільшого
maxElement = arr[0];
for (let i = 1, length = arr.length; i < length; i++) {
    if (maxElement < arr[i]) {
        maxElement = arr[i];
        arr[elementIndex] = 0;
        elementIndex = i;
    } else {
        arr[i] = 0;
    }
}

document.write(`<p>Sum of the positive numbers: ${sumPosNum}</p>`)
document.write(`<p>Positive numbers: ${counterPosNum}</p>`)
document.write(`<p>Min element is: ${minElement}</p>`)
document.write(`<p>Min element index is: ${minElementIndex}</p>`)
document.write(`<p>Max element is: ${maxElement}</p>`)
document.write(`<p>Max element index is: ${maxElementIndex}</p>`)
document.write(`<p>Negative numbers: ${counterNegNum}</p>`)
document.write(`<p>Number of odd positive elements: ${counterOddNum}</p>`)
document.write(`<p>Number of even positive elements: ${counterEvenNum}</p>`)
document.write(`<p>Sum of even positive elements: ${sumEvenNum}</p>`)
document.write(`<p>Sum of odd positive elements: ${sumOddNum}</p>`)
document.write(`<p>Product of positive elements: ${mulPosNum}</p>`)
document.write(`<p>New array with 0: ${arr.join(', ')}</p>`)


