// Task #2--------------------------------
// Є блок із текстом на сторінці та кнопка. При натисканні на кнопку текст змінює колір. При повторному натисканні – повертається попередній колір

'use strict'

const text = document.querySelector('.text');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    if (!text.classList.contains('txt-color')) {
        text.classList.add('txt-color');
        return;
    }
    text.classList.remove('txt-color');
});
