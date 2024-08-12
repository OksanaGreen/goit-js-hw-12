import{a as v,i,S as L}from"./assets/vendor-0Fq3u7cb.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();let p=15;async function g(r,e){const n="https://pixabay.com/api/",a=new URLSearchParams({key:"42978821-e3c6f538b5791c0a766c3ba19",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:p}),t=`${n}?${a}`;return await v.get(t).then(s=>s.data.hits).catch(s=>console.log(s))}function w({webformatURL:r,largeImageURL:e,tags:n,likes:a,views:t,comments:o,downloads:s}){return`<li class="gallery-item">
          <a class="gallery-link" href="${e}">
            <img
              class="gallery-image"
              src="${r}"
              alt="${n}"
              width="360"
            />
          </a>
          <div class="thumb-block">
            <div class="block">
              <h2 class="tittle">Likes</h2>
              <p class="amount">${a}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Views</h2>
              <p class="amount">${t}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Comments</h2>
              <p class="amount">${o}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Downloads</h2>
              <p class="amount">${s}</p>
            </div>
          </div>
        </li>`}function h(r){return r.map(w).join("")}const m=document.querySelector(".form");document.querySelector("#search");const u=document.querySelector(".gallery"),d=document.querySelector(".load-btn");let f=1,c="";$();m.addEventListener("submit",S);async function S(r){if(r.preventDefault(),c=r.currentTarget.elements.input.value.trim(),u.innerHTML="",!c){i.warning({title:"Caution",message:"You forgot to fill in the form!",position:"topCenter"});return}y();try{const e=await g(c);if(l(),e.length===0){i.error({title:"Search result",message:"Sorry, there are no images matching your search query. Please try again.",position:"topCenter"});return}const n=h(e);u.innerHTML=n,b(),q()}catch(e){l(),e.name==="TypeError"&&e.message.includes("Failed to fetch")?i.error({title:"Network Error",message:"Unable to connect. Please check your internet connection and try again.",position:"topCenter"}):i.error({title:"Error",message:`Error: ${e.message}`,position:"topCenter"})}m.reset()}d.addEventListener("click",E);async function E(r){f+=1,y();try{const e=await g(c,f),n=h(e);u.insertAdjacentHTML("beforeend",n),b(),P(),l(),e.length<p&&(i.warning({title:"End of Results",message:"We're sorry, but you've reached the end of search results.",position:"topCenter"}),d.style.display="none")}catch(e){i.error({color:"red",message:`❌ Error fetching more images: ${e.message}`,position:"topCenter"})}finally{l()}}function y(){if(!document.querySelector(".loader")){const e=document.createElement("div");e.className="loader",m.insertAdjacentElement("afterend",e)}}function l(){const r=document.querySelector(".loader");r&&r.remove()}function $(){d.style.display="none"}function q(){d.style.display="flex"}function P(){const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}function b(){new L(".gallery a",{captionDelay:250,captionsData:"alt"}).refresh()}
//# sourceMappingURL=commonHelpers.js.map
