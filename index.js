import{a as f,S as u,i as l}from"./assets/vendor-hwdYKDic.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const m="48881929-8a2d26e052171fbda160d8dd0",p="https://pixabay.com/api/";async function y(s){try{return(await f.get(p,{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(t){throw console.error("Error fetching images:",t),t}}function g(s){const t=document.querySelector(".gallery");t.innerHTML=s.map(({webformatURL:i,largeImageURL:a,tags:e,likes:r,views:o,comments:c,downloads:d})=>`
         <div class="gallery-item">
          <a href="${a}" class="gallery-link">
            <img src="${i}" alt="${e}" class="gallery-image">
          </a>
          <div class="image-info">
            <div class="info-item">
              <p class="info-title">Likes</p>
              <p class="info-value">${r}</p>
            </div>
            <div class="info-item">
              <p class="info-title">Views</p>
              <p class="info-value">${o}</p>
            </div>
            <div class="info-item">
              <p class="info-title">Comments</p>
              <p class="info-value">${c}</p>
            </div>
            <div class="info-item">
              <p class="info-title">Downloads</p>
              <p class="info-value">${d}</p>
            </div>
          </div>
        </div>
      `).join(""),new u(".gallery a").refresh()}const h=document.querySelector("#search-form"),n=document.querySelector("#loader"),v=document.querySelector(".gallery");h.addEventListener("submit",async s=>{s.preventDefault();const t=s.target.elements.query.value.trim();if(!t){l.error({title:"Error",message:"Please enter a search query!"});return}v.innerHTML="",n.style.display="block";try{const i=await y(t);i.hits.length===0?l.warning({title:"No Results",message:"Sorry, no images found. Try again!"}):g(i.hits)}catch{l.error({title:"Error",message:"Failed to fetch images. Try again later."})}finally{n.style.display="none"}});
//# sourceMappingURL=index.js.map
