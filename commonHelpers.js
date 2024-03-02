import{a as S,S as C,i as n}from"./assets/vendor-da186403.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();async function y(i,t,a){const u=`https://pixabay.com/api/?key=42515164-6d66b652ac661a4b366139ff0&q=${i}&image_type=photo&orientation=horizontal&safesearch=${!0}&page=${a}&per_page=${t}`;try{return(await S.get(u)).data}catch{iziToast.error({title:"Error",titleColor:"#fff",message:"Error while fetching images from Pixabay!",messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#ef4040",theme:"dark",iconUrl:errorIcon,maxWidth:"432px"})}}function b(i){return i.map(({webformatURL:t,largeImageURL:a,tags:o,likes:e,views:r,comments:s,downloads:g})=>`<li class="gallery-item">
                <a class="gallery-link" href="${a}">
                <img
                class="gallery-image"
                src="${t}"
                data-source="${a}"
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
                            <p class="image-quantity">${s}</p>
                        </li>
                        <li class="image-item">
                            <h2 class="image-text">Downloads</h2>
                            <p class="image-quantity">${g}</p>
                        </li>
                    </ul>
                </div>
            </li>`).join("")}const c="/goit-js-hw-12/assets/x-octagon-4f06a8ee.svg",l=document.querySelector(".form"),h=document.querySelector(".gallery"),m=document.querySelector(".loader"),d=document.querySelector(".load-button"),L=new C(".gallery .gallery-link",{captionsData:"alt"});let f,x;l.addEventListener("submit",$);function $(i){i.preventDefault(),h.innerHTML="",d.classList.add("is-hidden");const t=l.elements.word.value.trim();if(!t){n.error({title:"Error",titleColor:"#fff",message:"Search query cannot be empty",messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#ef4040",theme:"dark",iconUrl:c,maxWidth:"432px"}),l.reset();return}m.classList.remove("is-hidden"),y(t,15,1).then(a=>{const o=a.hits;if(o.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#ef4040",theme:"dark",iconUrl:c,maxWidth:"432px"}),l.reset();return}const e=b(o);h.insertAdjacentHTML("beforeend",e),x=t,f=1,L.refresh(),d.classList.remove("is-hidden"),l.reset(),d.addEventListener("click",r=>{r.preventDefault(),m.classList.remove("is-hidden"),f++,y(x,15,f).then(s=>{f*15>s.totalHits&&(d.classList.add("is-hidden"),n.warning({message:"We're sorry, but you've reached the end of search results.",messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#ef4040",theme:"dark",maxWidth:"432px"}));const u=b(s.hits);h.insertAdjacentHTML("beforeend",u),m.classList.add("is-hidden");const E=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:E*2,behavior:"smooth"})}).catch(s=>{n.error({title:"Error",titleColor:"#fff",message:"Error while fetching images from Pixabay!",messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#ef4040",theme:"dark",iconUrl:c,maxWidth:"432px"})})})}).catch(a=>{n.error({title:"Error",titleColor:"#fff",message:"Error while fetching images from Pixabay!",messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#ef4040",theme:"dark",iconUrl:c,maxWidth:"432px"})}).finally(()=>{m.classList.add("is-hidden")})}
//# sourceMappingURL=commonHelpers.js.map
