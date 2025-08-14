// Task #5--------------------------------
// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

function isContainSymbol(list, char) {
    for (let i = 0, length = list.length; i < length; i++) {
        if (list[i] === char) {
            return true;
        }
    }
    return false;
}

function func(string, symbols) {
    let newString = '';
    for (let i = 0, length = string.length; i < length; i++) {
        if (!isContainSymbol(symbols, string[i])) {
            newString += string[i];
        }
    }
    console.log(`String without the symbols -> ${newString}`);
}

const str = prompt('Enter a string');
const symbols = Array.from(prompt('Enter symbols to delete'));
console.log (`The string you entered -> ${str}`);
console.log (`Symbols to delete are -> ${symbols}`);
func(str, symbols);