import{a as d,S as f,i as l}from"./assets/vendor-c493984e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();async function g(s){return(await d.get("https://pixabay.com/api",{params:{key:"44309654-823a8ee5bf9a3cfe17e257280",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15}})).data}const c=document.querySelector(".gallery");function y(s){c.innerHTML="";const r=s.map(({largeImageURL:o,webformatURL:a,tags:e,likes:t,views:i,comments:m,downloads:p})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${o}" target="_blank">
          <img class="gallery-image" 
               src="${a}" 
               alt="${e}" 
          />
        </a>
        <div class="image-details">
          <p class="text"><b>Likes</b> ${t}</p>
          <p class="text"><b>Views</b> ${i}</p>
          <p class="text"><b>Comments</b> ${m}</p>
          <p class="text"><b>Downloads</b> ${p}</p>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",r)}const n=document.querySelector(".form"),u=document.querySelector(".loader"),h=document.querySelector(".gallery");document.querySelector(".load-more-btn");const b=new f(".gallery a",{captionDelay:250,captionsData:"alt"});n.addEventListener("submit",s=>{s.preventDefault();const r=n.elements.input.value.trim();if(!r){l.error({message:"Before executing the request, please enter its title!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",iconColor:"#FAFAFB",position:"topRight",timeout:3e3,theme:"dark",maxWidth:450});return}u.style.display="block",g(r).then(o=>{o&&o.hits.length===0?(l.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",iconColor:"#FAFAFB",position:"topRight",timeout:3e3,theme:"dark",maxWidth:450}),h.innerHTML=""):(y(o.hits),b.refresh()),u.style.display="none",n.reset()})});
//# sourceMappingURL=commonHelpers.js.map
