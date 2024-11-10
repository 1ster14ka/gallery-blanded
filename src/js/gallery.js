import { getPhotos } from './unsplash-api';
import { refs } from './refs';
import { createMarkup } from './createmarkup';
import { showLoader, hideLoader } from './loader';

const page = 1;

refs.form.addEventListener('submit', onSubmit);

async function onSubmit(event) {
  event.preventDefault();
  refs.list.innerHTML = '';
  showLoader();
  const searchQuery = event.target.elements['user-search-query'].value.trim();

  try {
    const response = await getPhotos(searchQuery, page);
    refs.list.innerHTML = createMarkup(response.results);
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
  }
}
