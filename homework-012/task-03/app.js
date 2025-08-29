// Task #3--------------------------------
// Покласти в папку будь-які зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg.
// Вивести зображення, отримане випадковим чином (Math.random)

'use strict'

const prImages = document.querySelector('.pr-images');
const imagesNum = document.querySelector('.images-num');
const randomImage = document.querySelector('.random-image');

for (let i = 0; i < 9; i++) {
    const prImage = document.createElement('div');
    prImage.classList.add('pr-image');
    prImages.appendChild(prImage);
    prImage.style.backgroundImage = `url('images/${i + 1}.png')`;

    const imageNum = document.createElement('div');
    imageNum.classList.add('image-num');
    imagesNum.appendChild(imageNum);
    imageNum.innerHTML = `${i + 1}`;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumber = getRandomInt(1, 9);
randomImage.style.backgroundImage = `url('images/${randomNumber}.png')`;

const imageNumberElement = document.querySelectorAll('.image-num');

imageNumberElement.forEach((item) => {
    const num = item.innerHTML;
    if (num === randomNumber.toString()) {
        item.style.backgroundColor = 'aqua';
    }
})
