// Дано тризначне число, яке надае користувач, потрибно визначити:
//
// Чи правда, що всі цифри однакові?
// Чи є серед цифр цифри однакові?
const digit = parseInt(prompt('Enter digit'), 10);
const one = digit % 10;
const two = (digit % 100 - one) / 10;
const three = (digit - (digit % 100)) / 100;

if ((digit / 100) < 1 || (digit / 100) >= 10) {
    console.log('This is NOT a three-digit number!', digit);
} else {
    console.log(one === two && one === three && two === three ? 'The numbers are the same' : 'The numbers are NOT the same!');
    console.log(one === two || one === three || two === three ? 'The digit has the same numbers' : 'The digit does NOT HAVE the same numbers!');
}