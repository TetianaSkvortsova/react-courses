//  Bootstrap:
//
// Вивести на сторінку кнопку (застосувати стилі бутстрапа), при натисканні на яку, відкривається дефолтне модальне
// вікно із деякими даними
// Повісити на цю кнопку Tooltip із довільним текстом
// Створити поруч ще одну кнопку, при натисканні на яку, відображається бутстрапівський алерт.
// При повторному натисканні - він зникає
'use strict'

const tooltipTriggerList = document.querySelector('[data-bs-toggle="tooltip"]');
new bootstrap.Tooltip(tooltipTriggerList);

// --------------------Alert---------------------------------------

function showAlert(message, type) {
    const alertPlaceholder = document.getElementById('alertPlaceholder');

    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible fade show" role="alert">`,
        `  <div>${message}</div>`,
        '</div>'
    ].join('');

    alertPlaceholder.append(wrapper);
    button.setAttribute('data-toggle', 'off');
    button.textContent='Hide alert';
}

function hideAlert() {
    wrapper.textContent = '';
    button.setAttribute('data-toggle', 'on');
    button.textContent='Show alert';
}

const button = document.getElementById('alertButton');
const wrapper = document.createElement('div');
wrapper.setAttribute('class', 'wrapper');

button.addEventListener('click', function () {
    const toggle = button.getAttribute('data-toggle');
    if (toggle === 'on') {
        showAlert('Success!', 'success');
    } else {
        console.log(toggle);
        hideAlert();
    }
})