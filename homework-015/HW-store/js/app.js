const radioBtn = {
    overlay: 'Накладений платіж',
    account: 'Оплата на рахунок'
}

const labels = {
    product: '',
    fullName: 'ПІБ',
    city: 'Місто',
    storage: 'Склад',
    payment: 'Оплата',
    amount: 'Кількість',
    comment: 'Коментар'
}

const showCategories = () => {
    const parent = document.querySelector('.categories');
    if (!parent) {
        return;
    }

    const categoriesList = document.createElement('ul');
    categoriesList.addEventListener('click', event => {
        if (info.hasChildNodes()) {
            removeDescription();
        }
        if (event.target && event.target.tagName === 'LI') {
            const test = document.querySelector('.categories .backlight');
            if (test) {
                test.classList.remove('backlight');
            }

            const categoryId = event.target.getAttribute('data-category');
            const category = categories[categoryId];
            if (!category) {
                return;
            }
            event.target.setAttribute('class', 'backlight');
            showProductsByCategory(category);
        }
    });

    Object.values(categories).forEach(category => {
        const element = document.createElement('li');
        element.textContent = category.name;
        element.setAttribute('data-category', category.id);

        categoriesList.appendChild(element);
    });

    parent.appendChild(categoriesList);
}

const info = document.querySelector('.info');
const showProductsByCategory = category => {
    // const { products } = category; те саме, що і нижче
    const products = category.products;
    const parent = document.querySelector('.products');
    if (!parent) {
        return;
    }

    parent.innerHTML = '';

    const productsList = document.createElement('ul');

    productsList.addEventListener('click', event => {
        if (event.target && event.target.tagName === 'LI') {
            const categoryId = event.target.getAttribute('data-category');
            const productId = event.target.getAttribute('data-product');
            // TODO: (at home)
            // Add content to the third column
            const test = document.querySelector('.products .backlight');
            if (test) {
                test.classList.remove('backlight');
            }
            event.target.setAttribute('class', 'backlight');

            if (info.hasChildNodes()) {
                removeDescription();
            }

            const product = categories[categoryId].products;
            const productItem = product.find((item) => {
                return item.id.toString() === productId;
            })

            const description = document.createElement('p');
            const btnBuy = document.createElement('button');
            btnBuy.setAttribute('class', 'btnBuy');
            btnBuy.innerHTML = 'Buy';
            btnBuy.addEventListener('click', () => {
                const wrapper = document.querySelector('.wrapper');
                showForm();
            })
            description.innerHTML = productItem.description;
            info.setAttribute('data-category', categoryId);
            info.setAttribute('data-product', productId);
            info.appendChild(description);
            info.appendChild(btnBuy);
        }
    });


    products.forEach(product => {
        const element = document.createElement('li');
        element.textContent = `${product.name} - $${product.price}`;
        element.setAttribute('data-product', product.id);
        element.setAttribute('data-category', category.id);
        productsList.appendChild(element);
    });

    parent.appendChild(productsList);
}
const btnConfirm = document.querySelector('.confirm');
btnConfirm.addEventListener('click', () => {
    const orderForm = document.forms.orderForm;
    const checked = checkValidation(orderForm);
    if (checked) {
        const formData = getFormData(orderForm);
        showOrderInfo(formData);
    }
})

function getFormData(form) {

    const formData = {};
    for (let i = 0, length = form.length; i < length; i++) {
        const control = form[i];

        if (control.type === 'button') {
            continue;
        }
            formData[control.name] = control.value;
    }
    return formData;
}

function showOrderInfo(formData) {
    const orderForm = document.querySelector('.form');
    orderForm.style.display = 'none';

    const wrapper = document.querySelector('.wrapper');
    const orderDetails = document.createElement('div');

    orderDetails.setAttribute('class', 'orderDetails');
    wrapper.appendChild(orderDetails);

    const productRow = document.createElement('div');
    const product = document.querySelector('.products .backlight');

    productRow.textContent = `Ви придбали -> ${product.textContent}`;
    orderDetails.appendChild(productRow);

    Object
        .keys(formData)
        .forEach((key) => {
            const value = formData[key];
            const row = document.createElement('div');
            row.setAttribute('class', 'row');
            const dataField = document.createElement('div');
            dataField.setAttribute('class', 'cell');
            dataField.textContent = labels[key];
            row.appendChild(dataField);
            const dataValue = document.createElement('div');
            if (key === 'city') {
                const city = cities.find((item) => value === item.value);
                dataValue.textContent = city.city;
            } else if (key === 'payment') {
                const payment = radioBtn[value];
                dataValue.textContent = payment;
            } else {
                dataValue.textContent = value;
            }
            row.appendChild(dataValue);
            orderDetails.appendChild(row);
        })
}

function checkValidation(orderForm) {
    if (!orderForm.fullName.value) {
        alert('Введіть ім`я отримувача');
        return;
    }

    if (orderForm.city.value === 'default') {
        alert('Оберіть місто');
        return;
    }

    if (orderForm.storage.value === 'default') {
        alert('Оберіть склад');
        return;
    }

    if (!orderForm.payment[0].checked && !orderForm.payment[1].checked) {
        alert('Оберіть спосіб оплати');
        return;
    }

    if (!orderForm.amount.value) {
        alert('Введіть кількість');
    }

    return true;
}

function removeDescription() {
    const btnBuy = document.querySelector('.info .btnBuy')
    const description = document.querySelector('.info p');
    info.removeChild(description);
    info.removeChild(btnBuy);
}

function citiesDropdown() {
    const citySelect = document.querySelector('.city');
    const defaultOption = document.createElement('option');
    defaultOption.setAttribute('value', 'default');
    defaultOption.textContent = 'Оберіть місто';
    citySelect.appendChild(defaultOption);

    cities.forEach((item) => {
        const option = document.createElement('option');
        option.setAttribute('value', item.value);
        option.textContent = item.city;
        citySelect.appendChild(option);
    })
}

function showForm() {
    citiesDropdown();
    const orderForm = document.querySelector('.form');
    orderForm.style.display = 'block';
}

showCategories();
