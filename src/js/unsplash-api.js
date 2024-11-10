import axios from 'axios';
const BASE_URL = 'https://api.unsplash.com';
const ENDPOINT = '/search/photos';
const API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';

async function getPhotos(query, page) {
  const response = await axios.get(`${BASE_URL}${ENDPOINT}`, {
    params: {
      query,
      page,
      per_page: 12,
      orientation: 'portrait',
      client_id: API_KEY,
    },
  });
  return response.data;
}
