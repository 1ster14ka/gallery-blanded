import { getPhotos } from './unsplash-api';
import { refs } from './refs';
import { createMarkup } from './createmarkup';

const page = 1;

refs.form.addEventListener('submit', onSubmit);

async function onSubmit(event) {
  event.preventDefault();

  const searchQuery = event.target.elements['user-search-query'].value.trim();

  try {
    const response = await getPhotos(searchQuery, page);
    refs.list.innerHTML = createMarkup(response.results);
  } catch (error) {
    console.log(error);
  }
}
