'use strict'

// Реалізувати таймер відліку:
//
// Початок таймера визначати зі змінної
// Відобразити на сторінці час у форматі 01:25
// Коли закінчився таймер зупинити його

const setTimerBtn = document.querySelector('.set-timer button');

setTimerBtn.addEventListener('click', () => {
    const setTimerInput = document.querySelector('.set-timer input');
    const start = setTimerInput.value;

    startTimer(start, setTimerInput);
})

function startTimer(start, setTimerInput) {
    const setTimerContainer = document.querySelector('.set-timer');
    const timerContainer = document.querySelector('.timer');
    setTimerContainer.style.display = 'none';
    timerContainer.style.display = 'block';
    const intervalHandler = () => {
        const seconds = ('0' + start % 60).slice(-2);
        const minutes = (start - seconds) >= 60 ? ('0' + (start - seconds) / 60).slice(-2) : `00`;
        timerContainer.textContent = `${minutes} : ${seconds}`;
        if (start === 0) {
            clearInterval(interval);
            setTimerContainer.style.display = 'block';
            setTimerInput.value = '';
            timerContainer.style.display = 'none';
        }
        start -= 1;
    }
    intervalHandler();
    const interval = setInterval(intervalHandler, 1000);
}