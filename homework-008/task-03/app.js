// Task #3--------------------------------

function showLastNumber() {
    for (let i = 0; i < 10; i++) {
        const num = prompt('Enter a number > 100');
        if ((num > 100) || (i === 9) || (isNaN(num))) {
            console.log(`You entered ${num}`);
            break;
        }
    }
}

showLastNumber();