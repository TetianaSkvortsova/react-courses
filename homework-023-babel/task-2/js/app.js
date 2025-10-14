// Вивести дату вашого народження в довільному форматі із використанням бібліотеки
// moment.js

// Отримати від користувача дату його народження у форматі ДД/ММ/РРРР та через moment.js
// перетворити її в інший формат (напр., РРРР-ММ-ДД)
// реалізувати перевірку за допомогою регулярних виразів на коректність користувацького вводу
// якщо формат невірний - вивести помилку на сторінку (використати bootstrap стилі)

'use strict'

const dateContainer = document.querySelector('.date');
const dateOfBirth = moment('1985-07-13');
dateContainer.textContent = dateOfBirth.format('MMMM Do YYYY');

//---------------------------Input Date-------------------------------------------

const regEx = /^\d{2}\/\d{2}\/\d{4}$/;
const format = "DD/MM/YYYY";

const inputElement = document.getElementById('numericInput');

function showAlert(message, type) {
    const container = document.createElement('div');
    const alertPlaceholder = document.getElementById('alertPlaceholder');

    container.innerHTML = [
        `<div class="alert-heading fs-2 alert alert-${type} alert-dismissible fade show" role="alert">`,
        `  <div>${message}</div>`,
        '</div>'
    ].join('');

    alertPlaceholder.append(container);
    setTimeout(() => {
        const alertElement = container.querySelector('.alert');
        if (alertElement) {
            bootstrap.Alert.getOrCreateInstance(alertElement).close();
        }
    }, 4000);
}
let formatUserDate;
inputElement.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        const userDate = inputElement.value;
        const validation = userDate.match(regEx);

        if (!validation) {
            showAlert('Invalid format', 'danger');
        } else {
            const checkValid = moment(validation[0], format, true);
            if(!checkValid.isValid()) {
                showAlert('The day or month entered incorrectly test', 'danger');
            } else {
                formatUserDate = moment(validation[0], format).format('YYYY MMMM DD');
                showAlert(formatUserDate, 'success');
            }
        }
    }
})
