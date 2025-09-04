// Task #2--------------------------------
// Створіть HTML-сторінку з декількома кнопками. Ваше завдання - створити обробник подій для батьківського елементу,
// який відслідковуватиме кліки на всіх кнопках.
//
// Покроковий план:
//
// 1. Створіть HTML-елементи: батьківський контейнер з декількома вкладеними кнопками.
// 2. Додайте обробник подій до батьківського контейнера, який відслідковуватиме кліки.
// 3. Після кліку на будь-якій кнопці, виведіть повідомлення про те, яка саме кнопка була клікнута.

'use strict'

const parentBlock = document.querySelector('.wrapper');

parentBlock.addEventListener('click', (event) => {
    if (event.target && event.target.tagName === 'BUTTON') {
        const idButton = event.target.getAttribute('id');
        addHistory(idButton);
    }
})

function addHistory(btnNumber) {
    const historyBlock = document.querySelector('.history');
    const historyItem = document.createElement('div');
    historyItem.innerHTML = `You clicked button #${btnNumber}`;
    historyBlock.appendChild(historyItem);
}