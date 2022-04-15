import {router} from './router.js';
import {clearPreview} from "./upload.js";

const fieldsets = document.querySelectorAll('.add__fieldset');
const addBtn = document.querySelector('.add__btn');
const form = document.querySelector('.add__form');
const backBtns = document.querySelectorAll('.header__btn_back');

const changeFieldset = () => {

  let count = 0;

  addBtn.addEventListener('click', ({target}) => {
    const fieldset = fieldsets[count];
    let valid = true;

    for (const elem of fieldset.elements) {
      if (!elem.checkValidity()) {
        elem.classList.add('no-valid');
        valid = false;
      } else {
        elem.classList.remove('no-valid');
      }
    }

    if (valid) {
      count += 1;

      if (count === fieldsets.length - 1) {
        addBtn.textContent = 'Добавить книгу';
      }

      if (count === fieldsets.length) {

        const data = true;
        if (data) {
          form.reset();
          clearPreview();
          router.navigate('/');
          count = 0;
          addBtn.textContent = 'Далее';
        }
      }

      fieldset.classList.add('hidden');
      fieldsets[count].classList.remove('hidden');
    }
  });

  backBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const fieldset = fieldsets[count];

      if (count >= 1) {
        count -= 1;
        fieldset.classList.add('hidden');
        fieldsets[count].classList.remove('hidden');
        addBtn.textContent = 'Далее';
      } else {
        router.navigate('/');
        document.querySelector('.book__container').textContent = '';
        form.reset();
        clearPreview();
        return;
      }
    })
  });

};

export default changeFieldset;

