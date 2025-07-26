// Task #1--------------------------------
/*let num1 = parseInt(prompt('Enter digit #1'));
let num2 = parseInt(prompt('Enter digit #2'));

if(num1 > num2) {
    console.log('digit #1 bigger than digit #2')
} else if(num1 < num2){
    console.log('digit #1 smaller than digit #2')
} else {
    console.log('digit #1 and digit #2 are equal')
}*/

// Task #2-----------------------------------
/*let dis1 = parseInt(prompt('Enter distance feet'));
let dis2 = parseInt(prompt('Enter distance kilometers'));

dis1 *= 0.305;

if(dis1 > dis2) {
    console.log('Distance #1 in kilometers =', dis1, 'distance #1 bigger than distance #2');
} else if(dis1 < dis2){
    console.log('Distance #1 in kilometers =', dis1, 'distance #1 smaller than distance #2');
} else {
    console.log('distance #1 and distance #2 are equal');
}*/

// Task #3------------------------------------------
/*let a = parseInt(prompt('Enter number 1'));
let b = parseInt(prompt('Enter number 2'));

if (a < b){
    console.log(b % a === 0 ? 'YES' : 'NO');
} else {
    console.log(a % b === 0 ? 'YES' : 'NO');
    console.log('a > b')
}*/

// Task #4------------------------------------------
/*
let digit = parseInt(prompt('Enter digit'));
digit %= 10;
console.log(digit % 2 === 0 ? 'Еhis is an even number' : 'This is an odd number');
*/

// Task #5-------------------------------------------
/*let digit = parseInt(prompt('Enter digit'));
console.log('number is = ', digit);
let temp = digit % 10;
digit -= temp;
digit /= 10;
if(digit > temp){
    console.log('first > second');
} else if(digit < temp){
    console.log('second > first');
} else {
    console.log('They are equal');
}*/

// Task #6-------------------------------------------
let digit = parseInt(prompt('Enter digit'));
let one = digit % 10;
let two = (digit % 100 - one) / 10;
let three = (digit -(digit % 100)) / 100;

console.log('one ', one);
console.log('two ', two);
console.log('three ', three);
console.log('digit ', digit);