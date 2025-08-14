// Task #3--------------------------------

function showLastNumber() {
    for (let i = 0; i < 10; i++) {
        const number = prompt('Enter a number > 100');
        if ((number > 100 && number) || (i === 9)) {
            console.log(`The last number is ${number}`);
            break;
        }
    }
}

showLastNumber();