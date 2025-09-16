'use strict'
const basketFields = {
    name: 'Товар',
    price: 'Ціна',
    date: 'Дата замовлення'
}

const ordersHistory = document.querySelector('.order-history');

function init() {
    if (!ordersHistory) {
        return;
    }
    const backBtn = document.querySelector('.back');
    const orders = JSON.parse(localStorage.getItem('purchases')) || [];

    if (orders.length > 0) {
        ordersHistory.textContent = '';
        showOrdersInformation();
    } else {
        ordersHistory.textContent = 'У вас ще немає замовлень!';
    }

    backBtn.addEventListener('click', () => {
        history.back();
    })
    ordersHistory.addEventListener('click', (event) => {

        const targetElementClass = event.target.getAttribute('class');
        const targetElement = event.target;

        if (targetElementClass === 'more-info') {
            toggleDetails(targetElement);
        } else if (targetElementClass === 'delete-button') {
            removeOrderFromStorage(targetElement.parentElement);
        }
    })
}

function removeOrderFromStorage(parent) {
    const storageItemId = parent.getAttribute('id');
    const orders = getDataFromStorage();
    if (orders.length <= 0) {
        return;
    }

    orders.splice(storageItemId, 1);
    localStorage.setItem('purchases', JSON.stringify(orders));
    ordersHistory.textContent = '';
    showOrdersInformation();
}

function showMoreDetails(orderId, parent) {
    const containerDetails = document.createElement('div');
    containerDetails.setAttribute('class', 'see-details');

    const dataStorage = getDataFromStorage();

    const information = dataStorage[orderId].formData;
    Object
        .keys(information)
        .forEach((key) => {
            const newLine = document.createElement('p');
            const fieldName = document.createElement('span');
            const fieldData = document.createElement('span');
            fieldName.textContent = `${formOptions[key].caption}: `;

            if (key === 'city') {
                const city = cities.find((item) => information[key] === item.value);
                fieldData.textContent = `${city.city}`;
            } else if (key === 'payment') {
                const paymentValue = radioBtn[information[key]];
                fieldData.textContent = `${paymentValue}`;
            } else {
                fieldData.textContent = `${information[key]}`;
            }

            newLine.appendChild(fieldName);
            newLine.appendChild(fieldData);
            containerDetails.appendChild(newLine);
        })
    parent.appendChild(containerDetails);
}

function showOrdersInformation() {
    const dataStorage = getDataFromStorage();
    if (dataStorage.length <= 0) {
        return;
    }

    dataStorage.forEach((order, index) => {
        const row = document.createElement('div');
        const sequenceNumber = document.createElement('div');
        const moreInfo = document.createElement('div');
        const infoContainer = document.createElement('div');
        const deleteOrderBtn = document.createElement('button');

        row.setAttribute('class', 'basket-row');
        row.setAttribute('id', `${index}`);
        sequenceNumber.setAttribute('class', 'sequence-number');
        infoContainer.setAttribute('class', 'info-container');
        deleteOrderBtn.setAttribute('type', 'button');
        deleteOrderBtn.setAttribute('class', 'delete-button');

        deleteOrderBtn.textContent = 'Delete';
        sequenceNumber.textContent = `${index + 1}`;
        row.appendChild(sequenceNumber);

        Object
            .keys(basketFields)
            .forEach((key) => {
                const productInformation = document.createElement('div');
                const fieldName = document.createElement('div');
                const fieldData = document.createElement('div');

                productInformation.setAttribute('class', 'product-information');
                fieldName.setAttribute('class', 'field-name');
                fieldData.setAttribute('class', 'data-name');
                moreInfo.setAttribute('class', 'more-info');

                fieldName.textContent = `${basketFields[key]}: `;
                fieldData.textContent = `${order.item[key]}`;

                productInformation.appendChild(fieldName);
                productInformation.appendChild(fieldData);

                infoContainer.appendChild(productInformation);
                ordersHistory.style.display = 'block';
            })

        moreInfo.textContent = `see details`;
        row.appendChild(infoContainer);
        row.appendChild(moreInfo);
        row.appendChild(deleteOrderBtn);
        ordersHistory.appendChild(row);
        showMoreDetails(index, row);
    })
}

function getDataFromStorage() {
    const alreadySavedStr = localStorage.getItem('purchases');
    return !!alreadySavedStr ? JSON.parse(alreadySavedStr) : [];
}

function toggleDetails(targetElement) {

    const toggled = targetElement.getAttribute('toggle-on');
    const target = targetElement.parentElement.lastChild;

    if (toggled) {
        targetElement.removeAttribute('toggle-on');
        targetElement.textContent = 'see details';
        target.style.display = 'none';
    } else {
        targetElement.setAttribute('toggle-on', 'on');
        targetElement.textContent = 'less details';
        target.style.display = 'block';
    }
}

init();