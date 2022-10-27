import axios from "axios";

export const galleryCardsApi = async (name, page = 1, per_page = 12) => {

    const KEY = '29840242-456192cfb7aa7dbb81a60ed73';
    const BASE_URL = 'https://pixabay.com/api/';

    const response = await axios.get(
        `${BASE_URL}?key=${KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${per_page}`)
    return response.data;
   
}

