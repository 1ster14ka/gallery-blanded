import { getPhotos } from './unsplash-api';
import { refs } from './refs';
import { createMarkup } from './createmarkup';
import { showLoader, hideLoader } from './loader';
import { showBtn, hideBtn } from './loadmoar';
import { ssrExportAllKey } from 'vite/runtime';

let page = 1;
let searchQuery = null;

refs.form.addEventListener('submit', onSubmit);
refs.loadMoar.addEventListener('click', onClick);

async function onSubmit(event) {
  event.preventDefault();
  refs.list.innerHTML = '';
  showLoader();
  page = 1;
  searchQuery = event.target.elements['user-search-query'].value.trim();

  try {
    const response = await getPhotos(searchQuery, page);
    refs.list.innerHTML = createMarkup(response.results);
    response.total > 12 ? showBtn() : hideBtn();
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
  }
}

async function onClick(event) {
  page += 1;
  showLoader();
  hideBtn();

  try {
    const response = await getPhotos(searchQuery, page);
    refs.list.insertAdjacentHTML('beforeend', createMarkup(response.results));
    const lastPage = Math.ceil(response.total / 12);
    lastPage === page ? hideBtn() : showBtn();
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
  }
}
