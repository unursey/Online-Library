export const controlField = (btn, list, offList) => {
  btn.addEventListener('click', () => {
    list.classList.toggle('fields__list_active');
    offList.classList.remove('fields__list_active');
  });

  list.addEventListener('click', () => {
    if (target.classList.contains('fields_button')) {
      list.classList.remove('fields__list_active')
    }
  });
}
