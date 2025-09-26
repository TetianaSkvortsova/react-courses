'use strict'

// Реалізувати таймер відліку:
//
// Початок таймера визначати зі змінної
// Відобразити на сторінці час у форматі 01:25
// Коли закінчився таймер зупинити його

let start = 10;

function timer() {
    const timerContainer = document.querySelector('.timer');
    const seconds = ('0' + start % 60).slice(-2);
    const minutes = (start - seconds) >= 60 ? ('0' + (start - seconds) / 60).slice(-2) : `00`;
    timerContainer.textContent = `${minutes} : ${seconds}`;
    if (start === 0) {
        clearInterval(interval);
    }
    start -= 1;
}

const interval = setInterval(timer, 1000);
