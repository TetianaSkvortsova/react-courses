'use strict'

const genders = {
    M: 'Male',
    F: 'Female',
}

const cities = {
    KV: 'Kyiv',
    OD: 'Odessa',
    LV: 'Lviv',
    LTS: 'Lutsk',
}

const languages = {
    Eng: 'English',
    Fr: 'French',
    Ua: 'Ukrainian',
}

const nameToCaptionMap = {
    userName: 'Name:',
    userLastname: 'Lastname:',
    userBirth: 'Date of birth:',
    userGender: 'Gender:',
    userCity: 'City:',
    userAddress: 'Address:',
    userLanguage: 'Languages:'
}

const wrapper = document.querySelector('.wrapper');

document.querySelector('button').addEventListener('click', () => {
    const form = document.forms.signIn;
    const userData = {};

    // Extract from data
    for (let i = 0, length = form.length; i < length; i++) {
        if (!form[i].name) {
            continue;
        }

        const element = form[i];
        const elementName = element.name;
        let value = element.value;

        if (element.type === 'radio') {
            value = element.checked ? value : ((userData[elementName] && userData[elementName].value) || '');
            if (value) {
                value = genders[value];
            }
        } else if (element.type === 'checkbox') {
            if (userData[elementName]) {
                value = userData[elementName].value;
            } else {
                value = [];
            }
            if (element.checked) {
                value.push(languages[element.value]);
            }
        } else if (element.type === 'select-one') {
            value = cities[value];
        }

        userData[elementName] = {
            value: value,
            caption: nameToCaptionMap[elementName]
        }
    }

    const formElement = document.querySelector('form');
    formElement.style.display = 'none';
    showUserData(userData);
    console.log(userData);
})

function showUserData(userData) {

    Object
        .keys(userData)
        .forEach((fieldName) => {
            const fieldValue = userData[fieldName].value;
            const fieldCaption = userData[fieldName].caption;

            const cellField = document.createElement('div');
            const row = document.createElement('div');
            row.setAttribute('class', 'row');
            cellField.setAttribute('class', 'cellField');
            cellField.innerText = fieldCaption;
            row.appendChild(cellField);
            wrapper.appendChild(row);

            const cellData = document.createElement('div');
            cellData.setAttribute('class', 'cellData');
            cellData.textContent = Array.isArray(fieldValue) ? fieldValue.join(', ') : fieldValue;

            row.appendChild(cellData);
        });
}