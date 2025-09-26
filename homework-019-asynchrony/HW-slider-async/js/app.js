'use strict'

const pagination = document.querySelector('.pagination');
const images = document.querySelector('.images');
const navigation = document.querySelector('.arrows');

for (let i = 0; i < 10; i++) {
    const paginationItem = document.createElement('div');
    paginationItem.setAttribute('class', 'round');
    paginationItem.setAttribute('id', `${i + 1}`);
    pagination.appendChild(paginationItem);

    const imageItem = document.createElement('div');
    imageItem.setAttribute('class', 'image');
    imageItem.style.backgroundImage = `url('images/${i + 1}.png')`;
    imageItem.setAttribute('id', `${i + 1}`);
    images.appendChild(imageItem);
    if (i === 0) {
        imageItem.classList.add('showImage');
        paginationItem.classList.add('toggle');
    }
}

let interval = setInterval(autoScroll, 1500);

pagination.addEventListener('click', (event) => {
    if (event.target.classList.value !== 'pagination') {
        const paginationId = event.target.getAttribute('id');
        togglePagination(paginationId, event.target);
    }
})

navigation.addEventListener('click', (event) => {
    clearInterval(interval);
    const direction = event.target.classList.value;
    const currentImg = document.querySelector('.showImage')
    imgNavigation(currentImg, direction);
    interval = setInterval(autoScroll, 1500);
})

function autoScroll() {
    const currentImg = document.querySelector('.showImage')
    imgNavigation(currentImg, 'right');
}

function togglePagination(paginationId, currentPag) {
    const toggle = document.querySelector('.toggle');
    toggle.classList.remove('toggle');

    currentPag.classList.add('toggle');
    showImage(paginationId);
}

function showImage(targetImage) {
    const exImg = document.querySelector('.showImage');
    if (exImg) {
        exImg.classList.remove('showImage');
    }

    const img = document.getElementById(targetImage);
    img.classList.add('showImage');
}

function imgNavigation(currentImage, direction) {
    const curImgId = Number(currentImage.getAttribute('id'));
    const curPgn = document.querySelector('.toggle');

    if (direction === 'right') {
        if (curImgId !== 10) {
            showImage(curImgId + 1);
            togglePagination(curImgId + 1, curPgn.nextSibling);
        } else {
            showImage(1);
            togglePagination(1, curPgn.parentElement.firstElementChild);
        }
    } else if (direction === 'left') {
        if (curImgId !== 1) {
            showImage(curImgId - 1);
            togglePagination(curImgId - 1, curPgn.previousSibling);
        } else {
            showImage(10);
            togglePagination(10, curPgn.parentElement.lastChild);
        }
    }
}
