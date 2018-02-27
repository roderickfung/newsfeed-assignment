import {
  API_KEY
} from '../config/keys';

export const getArticles = (keyword) => {
  return fetch(`
https://newsapi.org/v2/everything?q=${keyword}&sortBy=popularity&apiKey=${API_KEY}`)
}