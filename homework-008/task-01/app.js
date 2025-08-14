// Task #1--------------------------------
// Написати функцію, яка приймає 1 параметр. Та складає значення з тим, що передали перший раз і т. д. Все це із замиканням

function sumCounter () {
    let prValue = 0;
    return function (i) {
        return prValue += i;
    }
}

let sum = sumCounter();

console.log(sum(4)); // 4
console.log(sum(6)); // 10
console.log(sum(10)); // 20
console.log(sum(7)); // 27