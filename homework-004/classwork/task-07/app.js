// Task #7-------------------------------------------
// Визначити, чи є дане шестизначне число - дзеркальним? (напр., 123321, 147741)
const digit = parseInt(prompt('Enter six-digit number'), 10);
const one = digit % 1000;
const two = (digit - one) / 1000;
const invert = ((one % 10) * 100) + ((one % 100) - ((one % 100) % 10)) + ((one - (one % 100)) / 100);

if ((digit / 100000) < 1 || (digit / 100000) >= 10) {
    console.log('This is NOT a six-digit number!', digit);
} else {
    console.log('You entered:', digit);
    console.log(invert === two ? 'It is mirrored' : 'It is NOT mirrored!');
}
