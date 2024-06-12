import{S as u,i as l}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();function m(a){const r=new URLSearchParams({key:"44309654-823a8ee5bf9a3cfe17e257280",q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${r}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}).catch(t=>{throw console.error("Error fetching data:",t),t})}function d(a){const r=document.querySelector(".gallery");r.innerHTML="";const t=a.map(s=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${s.largeImageURL}" target="_blank">
          <img class="gallery-image" 
               src="${s.webformatURL}" 
               alt="${s.tags}" 
          />
        </a>
        <div class="image-details">
          <p class="text"><b>Likes</b> ${s.likes}</p>
          <p class="text"><b>Views</b> ${s.views}</p>
          <p class="text"><b>Comments</b> ${s.comments}</p>
          <p class="text"><b>Downloads</b> ${s.downloads}</p>
        </div>
      </li>
    `).join("");r.insertAdjacentHTML("beforeend",t)}const i=document.querySelector(".form"),c=document.querySelector(".loader"),p=document.querySelector(".gallery"),f=new u(".gallery a",{captionDelay:250,captionsData:"alt"});i.addEventListener("submit",a=>{a.preventDefault();const r=i.elements.input.value.trim();if(!r){l.error({message:"Before executing the request, please enter its title!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",iconColor:"#FAFAFB",position:"topRight",timeout:3e3,theme:"dark",maxWidth:450});return}c.style.display="block",m(r).then(t=>{t&&t.hits.length===0?(l.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",iconColor:"#FAFAFB",position:"topRight",timeout:3e3,theme:"dark",maxWidth:450}),p.innerHTML=""):(d(t.hits),f.refresh()),c.style.display="none",i.reset()})});
//# sourceMappingURL=commonHelpers.js.map
