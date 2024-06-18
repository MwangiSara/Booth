import axios from 'axios';

const unsplashApi = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${process.env.VUE_APP_UNSPLASH_CLIENT_ID}`
  }
});

export const searchPhotos = (query, page = 1, perPage = 10) => {
  return unsplashApi.get('/search/photos', {
    params: {
      query: query,
      page: page,
      per_page: perPage
    }
  });
};
