import{a as E,S,i as c}from"./assets/vendor-da186403.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();async function p(i,t,s){const h=`https://pixabay.com/api/?key=42515164-6d66b652ac661a4b366139ff0&q=${i}&image_type=photo&orientation=horizontal&safesearch=${!0}&page=${s}&per_page=${t}`;try{return(await E.get(h)).data}catch{iziToast.error({title:"Error",titleColor:"#fff",message:"Error while fetching images from Pixabay!",messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#ef4040",theme:"dark",iconUrl:errorIcon,maxWidth:"432px"})}}function y(i){return i.map(({webformatURL:t,largeImageURL:s,tags:o,likes:e,views:r,comments:a,downloads:l})=>`<li class="gallery-item">
                <a class="gallery-link" href="${s}">
                <img
                class="gallery-image"
                src="${t}"
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
                            <p class="image-quantity">${r}</p>
                        </li>
                        <li class="image-item">
                            <h2 class="image-text">Comments</h2>
                            <p class="image-quantity">${a}</p>
                        </li>
                        <li class="image-item">
                            <h2 class="image-text">Downloads</h2>
                            <p class="image-quantity">${l}</p>
                        </li>
                    </ul>
                </div>
            </li>`).join("")}const m="/goit-js-hw-12/assets/x-octagon-4f06a8ee.svg",n=document.querySelector(".form"),g=document.querySelector(".gallery"),f=document.querySelector(".loader"),b=document.querySelector(".load-button"),C=new S(".gallery .gallery-link",{captionsData:"alt"});let u,x;n.addEventListener("submit",L);function L(i){i.preventDefault(),g.innerHTML="";const t=n.elements.word.value.trim();if(!t){c.error({title:"Error",titleColor:"#fff",message:"Search query cannot be empty",messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#ef4040",theme:"dark",iconUrl:m,maxWidth:"432px"}),n.reset();return}f.classList.remove("is-hidden"),p(t,3,1).then(s=>{const o=s.hits;if(o.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#ef4040",theme:"dark",iconUrl:m,maxWidth:"432px"}),n.reset();return}const e=y(o);g.insertAdjacentHTML("beforeend",e),x=t,u=1,C.refresh(),b.classList.remove("is-hidden"),n.reset(),b.addEventListener("click",r=>{r.preventDefault(),f.classList.remove("is-hidden"),u++,p(x,3,u).then(a=>{const l=y(a.hits);g.insertAdjacentHTML("beforeend",l),f.classList.add("is-hidden");const d=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:d*2,behavior:"smooth"})}).catch(a=>{c.error({title:"Error",titleColor:"#fff",message:"Error while fetching images from Pixabay!",messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#ef4040",theme:"dark",iconUrl:m,maxWidth:"432px"})})})}).catch(s=>{c.error({title:"Error",titleColor:"#fff",message:"Error while fetching images from Pixabay!",messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#ef4040",theme:"dark",iconUrl:m,maxWidth:"432px"})}).finally(()=>{f.classList.add("is-hidden")})}
//# sourceMappingURL=commonHelpers.js.map
