import{i as l,S as c}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();function u(s){const o=new URLSearchParams({key:"44309654-823a8ee5bf9a3cfe17e257280",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${o}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}).catch(e=>{throw console.error("Error fetching data:",e),e})}function f(s){const o=document.querySelector(".gallery");o.innerHTML="",s.forEach(e=>{const n=`
      <li>
        <a class="gallery-link" href="${e.largeImageURL}" target="_blank">
          <img class="gallery-image" 
               src="${e.webformatURL}" 
               alt="${e.tags}" 
          />
        </a>
        <div class="image-details">
          <p><b>Likes</b>: ${e.likes}</p>
          <p><b>Views</b>: ${e.views}</p>
          <p><b>Comments</b>: ${e.comments}</p>
          <p><b>Downloads</b>: ${e.downloads}</p>
        </div>
      </li>
    `;document.querySelector(".gallery").insertAdjacentHTML("beforeend",n)})}const i=document.querySelector(".form");document.querySelector(".loader");i.addEventListener("submit",s=>{s.preventDefault();const o=i.elements.input.value.trim();o&&u(o).then(e=>{e&&e.hits.length===0?l.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",iconColor:"#FAFAFB",position:"topRight",timeout:5e3}):(f(e.hits),new c(".gallery a",{captionDelay:250,captionsData:"alt"}).refresh()),i.reset()})});
//# sourceMappingURL=commonHelpers.js.map
