


export function imgTemplate(imgs) {
  const galleryElm = document.querySelector('.gallery')
 galleryElm.innerHTML = '';

  imgs.forEach((img) => {
    const cardMarkup = `
      <li>
        <a class="gallery-link" href="${img.largeImageURL}" target="_blank">
          <img class="gallery-image" 
               src="${img.webformatURL}" 
               alt="${img.tags}" 
          />
        </a>
        <div class="image-details">
          <p><b>Likes</b>: ${img.likes}</p>
          <p><b>Views</b>: ${img.views}</p>
          <p><b>Comments</b>: ${img.comments}</p>
          <p><b>Downloads</b>: ${img.downloads}</p>
        </div>
      </li>
    `;
    document.querySelector('.gallery').insertAdjacentHTML('beforeend', cardMarkup);
  });
}
