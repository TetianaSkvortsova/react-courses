// Розкласти за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл. Приклад:
//
// 10369
//
// 1 0 3 6 9

const digit = 10369;
let temp = digit % 10000;
temp = (digit - temp) / 10000;
let result = temp + ' ';

temp = digit % 1000;
temp -= temp;
result += temp + ' ';

temp = digit % 1000;
temp -= temp % 100;
result += temp/100 + ' ';

temp = digit % 100;
temp -= temp % 10;
result += temp/10 + ' ';

temp = digit % 10;
result += temp + ' ';
console.log('The result is', result);