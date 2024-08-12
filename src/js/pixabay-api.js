import axios from 'axios';
export let perPage = 15;
import { page } from '../main';

export async function getPictures(query, currentPage) {
  const BASE_URL = 'https://pixabay.com/api/';
  const params = new URLSearchParams({
    key: '45354989-e1e4081af194e4d3149ed2a9d',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: currentPage,
    per_page: perPage,
  });
  const url = `${BASE_URL}?${params}`;

  const images = await axios
    .get(url)
    .then(response => response.data.hits)
    .catch(error => console.log(error));

  return images;
}
