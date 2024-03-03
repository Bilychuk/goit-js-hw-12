import{a as L,S as $,i as l}from"./assets/vendor-da186403.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();async function h(t,r,s){const S=`https://pixabay.com/api/?key=42515164-6d66b652ac661a4b366139ff0&q=${t}&image_type=photo&orientation=horizontal&safesearch=${!0}&page=${s}&per_page=${r}`;try{return(await L.get(S)).data}catch{iziToast.error({title:"Error",titleColor:"#fff",message:"Error while fetching images from Pixabay!!!",messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#ef4040",theme:"dark",iconUrl:errorIcon,maxWidth:"432px"})}}function p(t){return t.map(({webformatURL:r,largeImageURL:s,tags:o,likes:e,views:a,comments:i,downloads:u})=>`<li class="gallery-item">
                <a class="gallery-link" href="${s}">
                <img
                class="gallery-image"
                src="${r}"
                data-source="${s}"
                alt="${o}"
                />
                </a>
                <div class="image-info">
                    <ul class="image-info-list">
                        <li class="image-item">
                            <h2 class="image-text">Likes</h2>
                            <p class="image-quantity">${e}</p>
                        </li>
                        <li class="image-item">
                            <h2 class="image-text">Views</h2>
                            <p class="image-quantity">${a}</p>
                        </li>
                        <li class="image-item">
                            <h2 class="image-text">Comments</h2>
                            <p class="image-quantity">${i}</p>
                        </li>
                        <li class="image-item">
                            <h2 class="image-text">Downloads</h2>
                            <p class="image-quantity">${u}</p>
                        </li>
                    </ul>
                </div>
            </li>`).join("")}const f="/goit-js-hw-12/assets/x-octagon-4f06a8ee.svg",n=document.querySelector(".form"),g=document.querySelector(".gallery"),c=document.querySelector(".loader"),d=document.querySelector(".load-button"),y=new $(".gallery .gallery-link",{captionsData:"alt"});let m,b;function x(t){t.preventDefault();const{className:r}=t.target}function E(t,r){const s=r*15;t.totalHits<=s&&(d.classList.add("is-hidden"),l.warning({message:"We're sorry, but you've reached the end of search results.",messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#ef4040",theme:"dark",maxWidth:"432px"}))}n.addEventListener("submit",k);d.addEventListener("click",t=>{c.classList.remove("is-hidden"),x(t),m++,h(b,15,m).then(r=>{E(r,m);const s=p(r.hits);g.insertAdjacentHTML("beforeend",s),y.refresh();const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}).catch(r=>{l.error({title:"Error",titleColor:"#fff",message:"Error while fetching images from Pixabay!",messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#ef4040",theme:"dark",iconUrl:f,maxWidth:"432px"})}).finally(()=>{c.classList.add("is-hidden")})});function k(t){t.preventDefault(),g.innerHTML="",x(t),m=1,c.classList.remove("is-hidden"),d.classList.add("is-hidden");const r=n.elements.word.value.trim();if(b=r,!r){c.classList.add("is-hidden"),l.error({title:"Error",titleColor:"#fff",message:"Search query cannot be empty",messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#ef4040",theme:"dark",iconUrl:f,maxWidth:"432px"}),n.reset();return}h(r,15,1).then(s=>{const o=s.hits;if(o.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#ef4040",theme:"dark",iconUrl:f,maxWidth:"432px"}),n.reset();return}const e=p(o);g.insertAdjacentHTML("beforeend",e),y.refresh(),d.classList.remove("is-hidden"),E(s,m),n.reset()}).catch(s=>{l.error({title:"Error",titleColor:"#fff",message:"Error while fetching images from Pixabay!",messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#ef4040",theme:"dark",iconUrl:f,maxWidth:"432px"})}).finally(()=>{c.classList.add("is-hidden")})}
//# sourceMappingURL=commonHelpers.js.map
