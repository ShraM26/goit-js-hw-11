
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
 
import {processHttpRequest} from './js/pixabay-api';
import { imgTemplate } from './js/render-functions';

const formElms = document.querySelector('.form');
const loader = document.querySelector('.loader');

formElms.addEventListener('submit', (e) => {
    e.preventDefault();

  loader.style.display = 'block';
  
  const inputValue = formElms.elements['input'].value.trim();
  
  if (!inputValue) return;
  
    processHttpRequest(inputValue) 
  .then((data) => {
            if (data && data.hits.length === 0) {
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    messageColor: '#FAFAFB',
                    backgroundColor: '#EF4040',
                    iconColor: '#FAFAFB',
                    position: 'topRight',
                    timeout: 3000,
                    theme: 'dark',
                    maxWidth: 450
                });
            } else {
                   imgTemplate(data.hits)
                const lightbox = new SimpleLightbox('.gallery a', {
                         captionDelay: 250,
                         captionsData: 'alt',
                    });
                  lightbox.refresh();
      }
      loader.style.display = 'none';
      formElms.reset();
        })
});






