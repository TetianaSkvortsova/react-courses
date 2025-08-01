// Task #1--------------------------------
let arr = [];
let arrLength;

do {
    arrLength = parseInt(prompt('Enter the length of the array '), 10);
} while (isNaN(arrLength) || arrLength <= 0);

for (let i = 0; i < arrLength; i++) {
    const item = parseInt(prompt('Enter an item of the array '));
    arr.push(item);
}

document.write(`<p>Output array: ${arr.join(', ')}</p>`)

function compare(a, b) {
    return a - b;
}

document.write(`<p>Sorted array: ${arr.sort(compare).join(', ')}</p>`)
arr.splice(1, 3);
document.write(`<p>Array without deleted element: ${arr.join(', ')}</p>`)
