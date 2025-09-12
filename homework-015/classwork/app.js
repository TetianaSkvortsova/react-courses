'use strict'

const textElement = document.querySelector('.text span');
const textValue = textElement.textContent;
const regExpHash = /#\w+[A-Z][a-z]+/gi;
const resultHash = textValue.match(regExpHash);

const hashtagsResult = document.querySelector('.hash');
resultHash.forEach((item) => {
    const resultItem = document.createElement('span');
    resultItem.textContent = item;
    hashtagsResult.appendChild(resultItem);
})

const regExpDate = /\d{2}.\d{2}.\d{4}/g;
const dateResult = document.querySelector('.date');
const resultDate = textValue.match(regExpDate);

resultDate.forEach((item) => {
    const resultItem = document.createElement('span');
    resultItem.textContent = item;
    dateResult.appendChild(resultItem);
})

const regExpLink = /https:\/\/[a-zA-Z0-9.-]+/g;
const linkResult = document.querySelector('.link');
const resultLink = textValue.match(regExpLink);

resultLink.forEach((item) => {
    const resultItem = document.createElement('span');
    resultItem.textContent = item;
    linkResult.appendChild(resultItem);
})

const userName = document.querySelector('.userName');
const checkName = document.querySelector('.checkName');
const regExpName = /^[a-z]\w{2,15}/i;


checkName.addEventListener('click', () => {
    const userNameValue = userName.value;
    const resultName = userNameValue.match(regExpName);
    if (!resultName) {
        alert('Invalid name');
    } else {
        alert('Name entered correctly');
    }
})

const checkPass = document.querySelector('.checkPass');
const userPass = document.querySelector('.userPass');
const regExpLow = /^[a-z]+$/i;
const regExpMiddle = /^[a-z0-9]+$/i;
const regExpHigh = /^[a-z0-9]\S+$/i;

checkPass.addEventListener('click', () => {
    const userPassValue = userPass.value;
    const lowPass = userPassValue.match(regExpLow);
    const middlePass = userPassValue.match(regExpMiddle);
    const highPass = userPassValue.match(regExpHigh);
    if (lowPass) {
        alert('Your password has low level');
    } else if (middlePass) {
        alert('Your password has middle level');
    } else if (highPass) {
        alert('Your password has high level');
    }
})
