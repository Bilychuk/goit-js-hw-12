import axios from "axios";

export async function fetchImages(query, per_page, page) {

    const KEY = '42515164-6d66b652ac661a4b366139ff0';
    const BASE_URI = 'https://pixabay.com/api/';
    const IMAGE_TYPE = 'photo';
    const ORIENTATION = 'horizontal';
    const SAFESEARCH = true;
    const LINK = `${BASE_URI}?key=${KEY}&q=${query}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&safesearch=${SAFESEARCH}&page=${page}&per_page=${per_page}`;
  
    try {
        const response = await axios.get(LINK);
        return response.data
    } catch (error) {
        iziToast.error({
            title: 'Error',
            titleColor: '#fff',
            message: 'Error while fetching images from Pixabay!!!',
            messageColor: '#fafafb',
            messageSize: '16px',
            backgroundColor: '#ef4040',
            theme: 'dark',
            iconUrl: errorIcon,
            maxWidth: '432px',
        }) ;
    }
};