'use strict';

const listDog=document.querySelector('.list');
const firstDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_1205.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/malamute/n02110063_642.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_3409.jpg';
const thirdDogName = 'Lana';
listDog.innerHTML=`<li> <img src="${firstDogImage}" alt=""></li><li>${firstDogName}</li><li> <img src="${secondDogImage}" alt=""></li><li>${secondDogName}</li><li> <img src="${thirdDogImage}" alt=""></li><li>${thirdDogName}</li>`