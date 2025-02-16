import { fetchImages } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import './css/styles.css';

const form = document.querySelector('#search-form');
const loader = document.querySelector('#loader');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = event.target.elements.query.value.trim();

  if (!query) {
    iziToast.error({ title: 'Error', message: 'Please enter a search query!' });
    return;
  }

  gallery.innerHTML = '';
  loader.style.display = 'block';
  try {
    const data = await fetchImages(query);
    if (data.hits.length === 0) {
      iziToast.warning({ title: 'No Results', message: 'Sorry, no images found. Try again!' });
    } else {
      renderGallery(data.hits);
    }
  } catch (error) {
    iziToast.error({ title: 'Error', message: 'Failed to fetch images. Try again later.' });
  } finally {
    loader.style.display = 'none'; 
  }
});
