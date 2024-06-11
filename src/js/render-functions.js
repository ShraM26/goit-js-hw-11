


export function imgTemplate(imgs) {
  const galleryElm = document.querySelector('.gallery')
 galleryElm.innerHTML = '';

  imgs.forEach((img) => {
    const cardMarkup = `
      <li class="gallery-item">
        <a class="gallery-link" href="${img.largeImageURL}" target="_blank">
          <img class="gallery-image" 
               src="${img.webformatURL}" 
               alt="${img.tags}" 
          />
        </a>
        <div class="image-details">
          <p class="text"><b>Likes</b> ${img.likes}</p>
          <p class="text"><b>Views</b> ${img.views}</p>
          <p class="text"><b>Comments</b> ${img.comments}</p>
          <p class="text"><b>Downloads</b> ${img.downloads}</p>
        </div>
      </li>
    `;
    document.querySelector('.gallery').insertAdjacentHTML('beforeend', cardMarkup);
  });
}
