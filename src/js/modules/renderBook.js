import {getLabels, getBooks, API_URI, deleteBooks} from "./serviceBook.js";
import {router} from './router.js';

const container = document.querySelector('.book__container');
const btnDelete = document.querySelector('.header__btn_delete');
const bookLabel = document.querySelector('.footer__btn.book__label');

btnDelete.addEventListener('click', async () => {
  await deleteBooks(btnDelete.dataset.id);
  router.navigate('/');
});

const getStars = rating => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i === 0) {
      stars.push(`<img class="book__rating-star" src="img/star.svg" alt="Рейтинг ${rating} из 5">`);
    } else if (i < rating) {
      stars.push(`<img class="book__rating-star" src="img/star.svg" alt="">`);
    } else {
      stars.push(`<img class="book__rating-star" src="img/star-o.svg" alt="">`);
    }
  }
  return stars;
};

export const renderBook = async (id) => {
  const [books, labels] = await Promise.all([getBooks(id), getLabels()]);

  container.textContent = '';

  const {author, title, description, label, image, rating} = books;

  const btnLabel = document.createElement('button');
  btnLabel.className = 'book__label book__label_hidden';
  btnLabel.textContent = labels[label];
  btnLabel.dataset.label = label;

  container.innerHTML = `
      <div class="book__wrapper">
        <img src='${API_URI}${image}' class="book__image" alt="Обложка книги ${title}">

        ${btnLabel.outerHTML}
      </div>

      <div class="book__content">
        <h2 class="book__title">${title}</h2>

        <p class="book__author">${author}</p>
        <div class="book__rating">
            ${getStars(rating).join('')}
        </div>

        <h3 class="book__subtitle">Описание</h3>

        <p class="book__description">${description}</p>
      </div>

     `;

  btnDelete.dataset.id = id;
  bookLabel.dataset.label = label;
  bookLabel.textContent = labels[label];
};

    /*const divImage = document.createElement('div');
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

};*/
