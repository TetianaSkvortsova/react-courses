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
const myModal = document.getElementById('myModal');
const container = document.querySelector('.container');

function loadData(essence) {
    const essenceUrl = `${apis.get(essence)}`;
    fetch(essenceUrl)
        .then((res) => res.json())
        .then((result) => {
            const page = essenceUrl.match(regEx);
            const page_1 = '?page=1';
            const pageNumber = page ? page[0] : page_1;
            createSpan(result.results, pageNumber, essence);
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

function createSpan(data, page, essence) {
    data.forEach((item) => {
        const spanElement = document.createElement('span');
        spanElement.textContent = item.name;
        if (essence === 'people') {
            spanElement.setAttribute('data-bs-toggle', 'modal');
            spanElement.setAttribute('data-bs-target', '#myModal');
            spanElement.setAttribute('data-page', `${page}`);
        }
        createRow(spanElement);
    })
}

function loadModalApis(page, name) {
    const api = `https://swapi.dev/api/people/${page}`;
    const modalApis = new Map();
    fetch(api)
        .then((res) => res.json())
        .then(({results}) => {
            const character = results.find((characterName) => characterName.name === name);
            const apiPlanet = character.homeworld;
            modalApis.set('planet', apiPlanet);
            const apiVehicles = character.vehicles.map((vehicle) => vehicle);
            modalApis.set('vehicle', apiVehicles);
            getModalData(modalApis);
        })
}

function getModalData(modalApisMap) {
    const planetApi = modalApisMap.get('planet');
    const vehicleApi = modalApisMap.get('vehicle');
    const homePlanet = document.querySelector('.home-planet');
    const essenceVehicle = document.querySelector('.essence-vehicle');
    getDetails(planetApi, homePlanet);
    if (vehicleApi.length) {
        vehicleApi.forEach((vehicle) => {
            getDetails(vehicle, essenceVehicle);
        })
    } else {
        const result = {
            name: 'This character has no vehicles'
        }
        essenceVehicle.appendChild(createContentElement(result));
    }
}

function createContentElement(result) {
    const content = document.createElement('p');
    content.setAttribute('class', 'temp');
    content.textContent = `${result.name}`;
    return content;
}

function getDetails(api, placeReply) {
    fetch(api)
        .then((res) => res.json())
        .then((result) => {
            const content = createContentElement(result);
            placeReply.appendChild(content);
        })
}

container.addEventListener('click', (event) => {
    const targetType = event.target.type;
    const parentId = event.target.parentNode.parentNode.id;
    if (targetType === "button") {
        const targetId = event.target.parentNode.id;
        parent = event.target.parentNode;
        loadData(targetId);
        parent.firstElementChild.disabled = true;
    } else if (parentId === "people") {
        const modalHeader = document.getElementById('myModalLabel');
        const name = event.target.textContent;
        modalHeader.textContent = name;
        const page = event.target.getAttribute('data-page');
        loadModalApis(page, name);
    } else {
        event.stopPropagation();
    }
})

myModal.addEventListener('hidden.bs.modal', function () {
    const replyPlace = document.querySelectorAll('.temp');
    replyPlace.forEach((item) => item.remove());
});