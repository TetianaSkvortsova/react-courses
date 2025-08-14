// Task #6--------------------------------
// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

function removeElement(arr, item) {
    for (let i = 0, length = arr.length; i < length; i++) {
        if (arr[i] === item) {
            arr.splice(i, 1);
        }
    }
}

const array = [1, 3, 4, 6, 2, 5, 7];
console.log(`Array -> ${array.join(',')}`);
removeElement(array, 4);
console.log(`New array -> ${array.join(',')}`); // Результат: [1, 3, 6, 2, 5, 7]
