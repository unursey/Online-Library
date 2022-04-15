import {getLabels, getBooks, API_URI} from "./serviceBook.js";
import {getStars} from "./renderListBooks.js";

const bookContainer = document.querySelector('.book__container')

export const renderBook = async (id) => {
  const [books, labels] = await Promise.all([getBooks(id), getLabels()]);

  bookContainer.textContent = '';


    const divImage = document.createElement('div');
    divImage.classList.add('book__wrapper');
    divImage.innerHTML = `
    <img src='${API_URI}${books.image}' class="book__image" alt="Обложка книги ${books.title}">
    <button class="book__label book__label_hidden">${labels[books.label]}</button>
  `;
    const divText = document.createElement('div');
    divText.classList.add('book__content');
    divText.innerHTML = `
    <h2 class="book__title">${books.title}</h2>
        <p class="book__author">${books.author}</p>
        <div class="book__rating">${getStars(books.rating).join('')}</div>
        <h3 class="book__subtitle">Описание</h3>
        <p class="book__description">${books.description}</p>
  `;

    bookContainer.append(divImage);
    bookContainer.append(divText);

};
