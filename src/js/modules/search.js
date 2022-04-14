const library = document.querySelector('.library');
const backBtns = document.querySelectorAll('.header__btn_back');
const btnSearch = document.querySelectorAll('.header__btn_search');
const search = document.querySelector('.search');
const btnAdd = document.querySelector('.header__btn-add');

const closeSearch = (e) => {

  if (e.target.closest('.search, .header__btn_search')) {
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

