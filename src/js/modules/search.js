import {renderList} from "./renderListBooks.js";
import {searchBooks} from './serviceBook.js';

const library = document.querySelector('.library');
const btnSearch = document.querySelectorAll('.header__btn_search');
const search = document.querySelector('.search');
const btnAdd = document.querySelector('.header__btn-add');
const searchForm = document.querySelector('.search__form');

const closeSearch = ({target}, flag) => {
  if (target.closest('.search, .header__btn_search') && !flag) {
    return;
  }
  search.classList.remove('search_active');
  btnAdd.classList.remove('header__btn-hide');
  document.body.removeEventListener('click', closeSearch);
};

btnSearch.forEach(btn => {
  btn.addEventListener('click', (e) => {
    search.classList.add('search_active');
    btnAdd.classList.add('header__btn-hide');

    document.body.addEventListener('click', closeSearch, true);
    library.addEventListener('click', closeSearch);
  });
});

searchForm.addEventListener('submit', async e => {
  e.preventDefault();
  const books = await searchBooks(searchForm.input.value);
  renderList(books);
  e.target.reset();
 closeSearch(e, true);
})
