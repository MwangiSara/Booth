import axios from 'axios';

const unsplashApi = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${process.env.VUE_APP_UNSPLASH_CLIENT_ID}`
  }
});

export const searchPhotos = (query, page = 1, perPage = 6) => {
  return unsplashApi.get('/search/photos', {
    params: {
      query: query,
      page: page,
      per_page: perPage
    }
  });
};

export const getcollections = ( page = 1, perPage = 9) => {
  return unsplashApi.get('/collections/', {
    params: {
      page: page,
      per_page: perPage
    }
  });
};