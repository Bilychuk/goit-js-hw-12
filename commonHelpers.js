import{a as C,S as L,i as l}from"./assets/vendor-da186403.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();async function h(a,r,t){const E=`https://pixabay.com/api/?key=42515164-6d66b652ac661a4b366139ff0&q=${a}&image_type=photo&orientation=horizontal&safesearch=${!0}&page=${t}&per_page=${r}`;try{return(await C.get(E)).data}catch{iziToast.error({title:"Error",titleColor:"#fff",message:"Error while fetching images from Pixabay!!!",messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#ef4040",theme:"dark",iconUrl:errorIcon,maxWidth:"432px"})}}function p(a){return a.map(({webformatURL:r,largeImageURL:t,tags:o,likes:e,views:s,comments:i,downloads:u})=>`<li class="gallery-item">
                <a class="gallery-link" href="${t}">
                <img
                class="gallery-image"
                src="${r}"
                data-source="${t}"
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
                            <p class="image-quantity">${s}</p>
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
            </li>`).join("")}const d="/goit-js-hw-12/assets/x-octagon-4f06a8ee.svg",n=document.querySelector(".form"),g=document.querySelector(".gallery"),c=document.querySelector(".loader"),f=document.querySelector(".load-button"),y=new L(".gallery .gallery-link",{captionsData:"alt"});let m,b;function x(a,r){const t=r*15;a.totalHits<=t&&(f.classList.add("is-hidden"),l.warning({message:"We're sorry, but you've reached the end of search results.",messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#ef4040",theme:"dark",maxWidth:"432px"}))}n.addEventListener("submit",$);f.addEventListener("click",a=>{c.classList.remove("is-hidden"),m++,h(b,15,m).then(r=>{x(r,m);const t=p(r.hits);g.insertAdjacentHTML("beforeend",t),y.refresh();const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}).catch(r=>{l.error({title:"Error",titleColor:"#fff",message:"Error while fetching images from Pixabay!",messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#ef4040",theme:"dark",iconUrl:d,maxWidth:"432px"})}).finally(()=>{c.classList.add("is-hidden")})});function $(a){a.preventDefault(),g.innerHTML="",m=1,c.classList.remove("is-hidden"),f.classList.add("is-hidden");const r=n.elements.word.value.trim();if(b=r,!r){c.classList.add("is-hidden"),l.error({title:"Error",titleColor:"#fff",message:"Search query cannot be empty",messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#ef4040",theme:"dark",iconUrl:d,maxWidth:"432px"}),n.reset();return}h(r,15,1).then(t=>{const o=t.hits;if(o.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#ef4040",theme:"dark",iconUrl:d,maxWidth:"432px"}),n.reset();return}const e=p(o);g.insertAdjacentHTML("beforeend",e),y.refresh(),f.classList.remove("is-hidden"),x(t,m),n.reset()}).catch(t=>{l.error({title:"Error",titleColor:"#fff",message:"Error while fetching images from Pixabay!",messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#ef4040",theme:"dark",iconUrl:d,maxWidth:"432px"})}).finally(()=>{c.classList.add("is-hidden")})}
//# sourceMappingURL=commonHelpers.js.map
