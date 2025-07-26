// Переписати код нижче з використанням конструкції switch…case

/*let numOrStr = prompt('Input number or string?');
console.log(numOrStr);

if (numOrStr === null) {
    console.log('ви скасували')
} else if (numOrStr.trim() === '') {
    console.log('Empty String');
} else if (isNaN(+numOrStr)) {
    console.log(' number is Ba_NaN')
} else {
    console.log('OK!')
}*/

let numOrStr = prompt('Input number or string?');
numOrStr = !!numOrStr ? numOrStr.trim() : numOrStr;
console.log(numOrStr);
switch (numOrStr) {
    case null:
        console.log('you canceled');
        break;
    case '':
        console.log('Empty String');
        break;
    default:
        isNaN(+numOrStr) ? console.log(' number is Ba_NaN') : console.log('OK!');
        break;
}
