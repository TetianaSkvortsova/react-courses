// Task #1--------------------------------
// На сторінці є дві кнопки. При натисканні на першу кнопку користувач повинен ввести в prompt посилання,
// при натисканні на другу – переадресовується на інший сайт (за раніше введеним посиланням).

'use strict'

const addLink = document.querySelector('.addLink');
const goLink = document.querySelector('.goLink');

addLink.addEventListener('click', () => {
    const userLink = prompt('Enter a link');
    if (!userLink) {
        alert('You did not enter a link!!!');
        return;
    }
    goLink.setAttribute('data-link', userLink);
});

goLink.addEventListener('click', () => {
    const userLink = goLink.getAttribute('data-link');
    if (!userLink) {
        alert('You did not enter a link!!!');
        return;
    }
    window.open(userLink);
});