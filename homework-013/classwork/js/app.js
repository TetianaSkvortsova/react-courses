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
                const basketItem = document.createElement('li');
                const basket = document.querySelector('.basket') || document.createElement('ul');
                basketItem.innerHTML = `You bought ${productItem.name} for ${productItem.price}$`;

                basket.setAttribute('class', 'basket');
                basket.appendChild(basketItem);
                wrapper.appendChild(basket);
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

function removeDescription() {
    const btnBuy = document.querySelector('.info .btnBuy')
    const description = document.querySelector('.info p');
    info.removeChild(description);
    info.removeChild(btnBuy);
}

showCategories();
