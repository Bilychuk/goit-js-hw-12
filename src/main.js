import { fetchImages } from './js/pixabay-api'
import { createGalleryMarkup } from './js/render-functions';
import errorIcon from "./img/x-octagon.svg";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const searchForm = document.querySelector(".form");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const loadMoreBtn = document.querySelector(".load-button");
const imageLightbox = new SimpleLightbox('.gallery .gallery-link', {
    captionsData: 'alt',
}); 
let current_page;
let current_query;

function selectImage(event) {
    event.preventDefault();
    const { className } = event.target;
    if (className !== "gallery-image") {
        return;
    }
}

function endListNotification(data, current_page) {
    const currentHitsAmount = current_page * 15;
                if (data.totalHits <= currentHitsAmount) {
                    loadMoreBtn.classList.add('is-hidden');
                    iziToast.warning({
                        message: "We're sorry, but you've reached the end of search results.",
                        messageColor: '#fafafb',
                        messageSize: '16px',
                        backgroundColor: '#ef4040',
                        theme: 'dark',
                        maxWidth: '432px',
                    })
                }
}

searchForm.addEventListener("submit", onSubmit);

loadMoreBtn.addEventListener('click', event => { 
    loader.classList.remove('is-hidden');
    selectImage(event);
    current_page++;
    fetchImages(current_query, 15, current_page)
        .then(data => {
            endListNotification(data, current_page);
            const markup = createGalleryMarkup(data.hits);
            gallery.insertAdjacentHTML("beforeend", markup);
            imageLightbox.refresh();
            const imageCard = document.querySelector('.gallery-item');
            const rect = imageCard.getBoundingClientRect().height;
            window.scrollBy({
                top: rect * 2,
                behavior: "smooth",
            });
        })
        .catch(error => { 
            iziToast.error({
                title: 'Error',
                titleColor: '#fff',
                message: 'Error while fetching images from Pixabay!',
                messageColor: '#fafafb',
                messageSize: '16px',
                backgroundColor: '#ef4040',
                theme: 'dark',
                iconUrl: errorIcon,
                maxWidth: '432px',
            }) 
        })
        .finally(() => {
            loader.classList.add("is-hidden");   
        })
})

function onSubmit(event) {
    event.preventDefault();
    gallery.innerHTML = "";
    selectImage(event);
    current_page = 1;
    loader.classList.remove("is-hidden");
    loadMoreBtn.classList.add('is-hidden');
    const query = searchForm.elements.word.value.trim();
    current_query = query;

    if (!query) {
        loader.classList.add("is-hidden");
        iziToast.error({
                title: 'Error',
                titleColor: '#fff',
                message: 'Search query cannot be empty',
                messageColor: '#fafafb',
                messageSize: '16px',
                backgroundColor: '#ef4040',
                theme: 'dark',
                iconUrl: errorIcon,
                maxWidth: '432px',
            });
            searchForm.reset()
            return;
    }

    fetchImages(query, 15, 1)
        .then(data => {
            const images = data.hits;

            if (images.length === 0) {
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    messageColor: '#fafafb',
                    messageSize: '16px',
                    backgroundColor: '#ef4040',
                    theme: 'dark',
                    iconUrl: errorIcon,
                    maxWidth: '432px',
                })
                searchForm.reset()
                return;  
            }
            const markup = createGalleryMarkup(images);
            gallery.insertAdjacentHTML("beforeend", markup);
            imageLightbox.refresh();
            loadMoreBtn.classList.remove('is-hidden');
            endListNotification(data, current_page);
            searchForm.reset();
        })
        .catch(error => {
            iziToast.error({
                title: 'Error',
                titleColor: '#fff',
                message: 'Error while fetching images from Pixabay!',
                messageColor: '#fafafb',
                messageSize: '16px',
                backgroundColor: '#ef4040',
                theme: 'dark',
                iconUrl: errorIcon,
                maxWidth: '432px',
            })   
        })
        .finally(() => {
            loader.classList.add("is-hidden");   
        })
} 