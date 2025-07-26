// Task #1--------------------------------
// Дано 2 числа. Визначити, яке з них більше, а яке - менше. Перевірити, чи вони однакові

const num1 = parseInt(prompt('Enter digit #1'));
const num2 = parseInt(prompt('Enter digit #2'));

if (num1 > num2) {
    console.log('digit #1 > than digit #2')
} else if (num1 < num2) {
    console.log('digit #1 < than digit #2')
} else {
    console.log('digit #1 = digit #2')
}
