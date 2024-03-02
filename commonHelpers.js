import{a as E,S,i as l}from"./assets/vendor-da186403.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function h(a,r,s){const b=`https://pixabay.com/api/?key=42515164-6d66b652ac661a4b366139ff0&q=${a}&image_type=photo&orientation=horizontal&safesearch=${!0}&page=${s}&per_page=${r}`;try{return(await E.get(b)).data}catch{iziToast.error({title:"Error",titleColor:"#fff",message:"Error while fetching images from Pixabay!",messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#ef4040",theme:"dark",iconUrl:errorIcon,maxWidth:"432px"})}}function p(a){return a.map(({webformatURL:r,largeImageURL:s,tags:o,likes:e,views:t,comments:i,downloads:u})=>`<li class="gallery-item">
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
                            <p class="image-quantity">${t}</p>
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
            </li>`).join("")}const c="/goit-js-hw-12/assets/x-octagon-4f06a8ee.svg",n=document.querySelector(".form"),g=document.querySelector(".gallery"),d=document.querySelector(".loader"),f=document.querySelector(".load-button"),C=document.querySelector(".gallery-item"),L=new S(".gallery .gallery-link",{captionsData:"alt"});let m,y;n.addEventListener("submit",$);f.addEventListener("click",a=>{d.classList.remove("is-hidden"),m++,h(y,15,m).then(r=>{m*15>r.totalHits&&(f.classList.add("is-hidden"),l.warning({message:"We're sorry, but you've reached the end of search results.",messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#ef4040",theme:"dark",maxWidth:"432px"}));const o=p(r.hits);g.insertAdjacentHTML("beforeend",o),d.classList.add("is-hidden");const e=C.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}).catch(r=>{l.error({title:"Error",titleColor:"#fff",message:"Error while fetching images from Pixabay!",messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#ef4040",theme:"dark",iconUrl:c,maxWidth:"432px"})})});function $(a){a.preventDefault(),g.innerHTML="",m=1,d.classList.remove("is-hidden"),f.classList.add("is-hidden");const r=n.elements.word.value.trim();if(y=r,!r){l.error({title:"Error",titleColor:"#fff",message:"Search query cannot be empty",messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#ef4040",theme:"dark",iconUrl:c,maxWidth:"432px"}),n.reset();return}h(r,15,1).then(s=>{const o=s.hits;if(o.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#ef4040",theme:"dark",iconUrl:c,maxWidth:"432px"}),n.reset();return}const e=p(o);g.insertAdjacentHTML("beforeend",e),L.refresh(),f.classList.remove("is-hidden"),n.reset()}).catch(s=>{l.error({title:"Error",titleColor:"#fff",message:"Error while fetching images from Pixabay!",messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#ef4040",theme:"dark",iconUrl:c,maxWidth:"432px"})}).finally(()=>{d.classList.add("is-hidden")})}
//# sourceMappingURL=commonHelpers.js.map
