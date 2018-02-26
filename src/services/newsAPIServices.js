import {
  API_KEY
} from '../config/keys';

export const getArticles = (keyword) => {
  return fetch(`
https://newsapi.org/v2/top-headlines?q=${keyword}&apiKey=${API_KEY}`)
}