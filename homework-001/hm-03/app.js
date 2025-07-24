let num = 10369;
let x = num % 10;
let result = '';

num -= x;
result += x.toString() + ' ';
num /= 10;

x = num % 10;
num -= x;
result += x.toString() + ' ';
num /= 10;

x = num % 10;
num -= x;
result += x.toString() + ' ';
num /= 10;

x = num % 10;
num -= x;
result += x.toString() + ' ';
num /= 10;

x = num % 10;
num -= x;
result += x.toString() + ' ';
num /= 10;

console.log('result is', result.split('').reverse().join(''));
