import {getLabels, getBooks, API_URI} from "./serviceBook.js";
import {getStars} from "./renderListBooks.js";

const bookContainer = document.querySelector('.book__container')

export const renderBook = async (id) => {
  const [books, labels] = await Promise.all([getBooks(id), getLabels()]);

bookContainer.textContent = '';

const r = window.location.href.split('id=')[1];

books.forEach(({author, description, id, image, label, rating, title}) => {

if (id === r) {
    const divImage = document.createElement('div');
    divImage.classList.add('book__wrapper');
    divImage.innerHTML = `
    <img src='${API_URI}${image}' class="book__image" alt="Обложка книги ${title}">
    <button class="book__label book__label_hidden">${labels[label]}</button>
  `;
    const divText = document.createElement('div');
    divText.classList.add('book__content');
    divText.innerHTML = `
    <h2 class="book__title">${title}</h2>
        <p class="book__author">${author}</p>
        <div class="book__rating">${getStars(rating).join('')}</div>
        <h3 class="book__subtitle">Описание</h3>
        <p class="book__description">${description}</p>
  `;

    bookContainer.append(divImage);
    bookContainer.append(divText);
}

});
};
