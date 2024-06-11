import{i as c,S as u}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();function f(s){const o=new URLSearchParams({key:"44309654-823a8ee5bf9a3cfe17e257280",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${o}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}).catch(e=>{throw console.error("Error fetching data:",e),e})}function d(s){const o=document.querySelector(".gallery");o.innerHTML="",s.forEach(e=>{const a=`
      <li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}" target="_blank">
          <img class="gallery-image" 
               src="${e.webformatURL}" 
               alt="${e.tags}" 
          />
        </a>
        <div class="image-details">
          <p class="text"><b>Likes</b> ${e.likes}</p>
          <p class="text"><b>Views</b> ${e.views}</p>
          <p class="text"><b>Comments</b> ${e.comments}</p>
          <p class="text"><b>Downloads</b> ${e.downloads}</p>
        </div>
      </li>
    `;document.querySelector(".gallery").insertAdjacentHTML("beforeend",a)})}const n=document.querySelector(".form"),i=document.querySelector(".loader");n.addEventListener("submit",s=>{s.preventDefault(),i.style.display="block";const o=n.elements.input.value.trim();o&&f(o).then(e=>{e&&e.hits.length===0?c.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",iconColor:"#FAFAFB",position:"topRight",timeout:3e3,theme:"dark",maxWidth:450}):(d(e.hits),new u(".gallery a",{captionDelay:250,captionsData:"alt"}).refresh()),i.style.display="none",n.reset()})});
//# sourceMappingURL=commonHelpers.js.map
