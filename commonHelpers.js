import{a as E,S,i as l}from"./assets/vendor-da186403.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();async function h(o,t,s){const b=`https://pixabay.com/api/?key=42515164-6d66b652ac661a4b366139ff0&q=${o}&image_type=photo&orientation=horizontal&safesearch=${!0}&page=${s}&per_page=${t}`;try{return(await E.get(b)).data}catch{iziToast.error({title:"Error",titleColor:"#fff",message:"Error while fetching images from Pixabay!!!",messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#ef4040",theme:"dark",iconUrl:errorIcon,maxWidth:"432px"})}}function p(o){return o.map(({webformatURL:t,largeImageURL:s,tags:a,likes:e,views:r,comments:i,downloads:u})=>`<li class="gallery-item">
                <a class="gallery-link" href="${s}">
                <img
                class="gallery-image"
                src="${t}"
                data-source="${s}"
                alt="${a}"
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
                            <p class="image-quantity">${i}</p>
                        </li>
                        <li class="image-item">
                            <h2 class="image-text">Downloads</h2>
                            <p class="image-quantity">${u}</p>
                        </li>
                    </ul>
                </div>
            </li>`).join("")}const m="/goit-js-hw-12/assets/x-octagon-4f06a8ee.svg",n=document.querySelector(".form"),g=document.querySelector(".gallery"),c=document.querySelector(".loader"),f=document.querySelector(".load-button"),C=new S(".gallery .gallery-link",{captionsData:"alt"});let d,y;n.addEventListener("submit",L);f.addEventListener("click",o=>{c.classList.remove("is-hidden"),d++,h(y,15,d).then(t=>{d*15>t.totalHits&&(f.classList.add("is-hidden"),l.warning({message:"We're sorry, but you've reached the end of search results.",messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#ef4040",theme:"dark",maxWidth:"432px"}));const a=p(t.hits);g.insertAdjacentHTML("beforeend",a),c.classList.add("is-hidden");const r=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}).catch(t=>{l.error({title:"Error",titleColor:"#fff",message:"Error while fetching images from Pixabay!",messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#ef4040",theme:"dark",iconUrl:m,maxWidth:"432px"})})});function L(o){o.preventDefault(),g.innerHTML="",d=1,c.classList.remove("is-hidden"),f.classList.add("is-hidden");const t=n.elements.word.value.trim();if(y=t,!t){c.classList.add("is-hidden"),l.error({title:"Error",titleColor:"#fff",message:"Search query cannot be empty",messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#ef4040",theme:"dark",iconUrl:m,maxWidth:"432px"}),n.reset();return}h(t,15,1).then(s=>{const a=s.hits;if(a.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#ef4040",theme:"dark",iconUrl:m,maxWidth:"432px"}),n.reset();return}const e=p(a);g.insertAdjacentHTML("beforeend",e),C.refresh(),f.classList.remove("is-hidden"),n.reset()}).catch(s=>{l.error({title:"Error",titleColor:"#fff",message:"Error while fetching images from Pixabay!",messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#ef4040",theme:"dark",iconUrl:m,maxWidth:"432px"})}).finally(()=>{c.classList.add("is-hidden")})}
//# sourceMappingURL=commonHelpers.js.map
