import axios from 'axios';
import iziToast from 'izitoast';

export async function fetchImages(searchQueryResult, currentPage) {
  try {
    const BASE_URL = 'https://pixabay.com/api/';
    const q = searchQueryResult;
    const params = new URLSearchParams({
      key: '43193553-b7bc5711100d7b640ba9cbdfc',
      q: q,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page: currentPage,
    });
    const url = `${BASE_URL}?${params}`;
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    iziToast.error({
      message: 'Server error!',
      position: 'topRight',
    });
  }
}
