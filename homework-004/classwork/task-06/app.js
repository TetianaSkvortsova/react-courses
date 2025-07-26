// Task #6-------------------------------------------
// Дано тризначне число.
// Визначити, чи є сума його цифр парною
// Визначити, чи кратна сума його цифр п’яти
// Визначити, чи є добуток його цифр більшим за 100
// Чи вірно, що всі його цифри однакові?
// Чи є серед його цифр однакові?
const digit = parseInt(prompt('Enter digit'));
const one = digit % 10;
const two = (digit % 100 - one) / 10;
const three = (digit - (digit % 100)) / 100;
const sum = one + two + three;

if ((digit / 100) < 1 || (digit / 100) >= 10) {
    console.log('This is NOT a three-digit number!', digit);
} else {
    console.log('digit ', digit);
    console.log('sum ', sum);
    console.log(sum % 2 === 0 ? 'The sum is an even number' : 'The sum is an odd number');
    console.log(sum % 5 === 0 ? 'The sum is a multiple of 5' : 'The sum is NOT a multiple of 5!');
    console.log(sum > 100 ? 'The sum > 100' : 'The sum < 100');
    console.log(one === two && one === three && two === three ? 'The numbers are the same' : 'The numbers are NOT the same!');
    console.log(one === two || one === three || two === three ? 'The digit has the same numbers' : 'The digit does NOT HAVE the same numbers!');
}
