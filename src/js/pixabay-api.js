
import axios from 'axios';

export async function processHttpRequest(searchQuery) {

  const response = await axios.get('https://pixabay.com/api', {
    params: {
      key: '44309654-823a8ee5bf9a3cfe17e257280',
      q: searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
    }
  });
  return response.data;
}
