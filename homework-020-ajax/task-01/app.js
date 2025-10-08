// Створити додаток по Зоряним війнам
// Реалізувати навігацію: Персонажі, Планети, Транспорт
// Виводити списки відповідних сутностей по кожному розділу
// Приділити увагу UI/UX (верстка, стилі, можна використовувати bootstrap або tailwind)
// Реалізувати пагінацію (підвантаження контента)
// Завдання з *: При кліці на сутність - відображати деталі по ній (персонаж, планета, транспорт)
'use strict'
const apis = new Map([
    ['people', 'https://swapi.dev/api/people/'],
    ['planets', 'https://swapi.dev/api/planets/'],
    ['vehicles', 'https://swapi.dev/api/vehicles/']
]);
const regEx = /\?.*/;

let parent;
const container = document.querySelector('.container');

function loadData(essence) {
    const essenceUrl = `${apis.get(essence)}`;
    fetch(essenceUrl)
        .then((res) => res.json())
        .then((result) => {
            const page = essenceUrl.match(regEx);
            const page_1 = '?page=1';
            const pageNumber = page ? page[0] : page_1;
            createSpan(result.results, pageNumber);
            const loadMoreBtn = document.querySelector(`.${essence} .btn-load`);

            apis.set(essence, result.next);
            if (result.next) {
                loadMoreBtn.classList.remove('hidden');
            } else {
                loadMoreBtn.classList.add('hidden');
            }
        })
}

function createRow(child) {
    const newRow = document.createElement('div');
    newRow.classList.add('themed-grid-col');
    newRow.appendChild(child);
    parent.insertBefore(newRow, parent.lastElementChild);
}

function createSpan(data, page) {
    data.forEach((item) => {
        const spanElement = document.createElement('span');
        spanElement.textContent = item.name;
        spanElement.setAttribute('data-bs-toggle', 'modal');
        spanElement.setAttribute('data-bs-target', '#myModal');
        spanElement.setAttribute('data-page', `${page}`);
        createRow(spanElement);
    })
}

function loadModalApis(essence, page, name) {
    const api = `https://swapi.dev/api/${essence}/${page}`;
    console.log(api);
    // const modalApis = new Map();
    /*fetch(api)
        .then((res) => res.json())
        .then((result) => {
            const character = result.results.find((characterName) => characterName.name === name);
            const apiPlanet = character.homeworld;
            modalApis.set('planet', apiPlanet);
            const apiVehicles = character.vehicles.map((vehicle) => vehicle);
            modalApis.set('vehicle', apiVehicles);
            getModalData(modalApis);
        })*/
}

/*function getModalData(modalApisMap) {
    const planetApi = modalApisMap.get('planet');
    getDetails(planetApi);
    // console.log(planet);
}

function getDetails(api) {
    fetch(api)
        .then((res) => res.json())
        .then((result) => {
           // console.log(result.name);
            const

           return result.name;
        })
}*/

container.addEventListener('click', (event) => {
    const targetType = event.target.type;
    if (targetType === "button") {
        const targetId = event.target.parentNode.id;
        parent = event.target.parentNode;
        loadData(targetId);
        parent.firstElementChild.disabled = true;
    } else if (event.target.tagName === "SPAN") {
        const modalHeader = document.getElementById('myModalLabel');
        const name = event.target.textContent;
        modalHeader.textContent = name;
        const targetId = event.target.parentNode.parentNode.id;
        const page = event.target.getAttribute('data-page');
        loadModalApis(targetId, page, name);
    } else {
        event.stopPropagation();
    }
})