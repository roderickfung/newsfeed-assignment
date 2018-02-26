import * as NewsService from '../services/newsAPIServices'
import {
  SET_NEWS,
  SET_TERM,
  RESET_TERM
} from '../constants/actiontypes'

export const resetTerm = () => {
  return (dispatch) => {
    dispatch({ type: RESET_TERM })
  }
}

export const setTerm = (keyword) => {
  return (dispatch) => {
    dispatch({
      type: SET_TERM,
      payload: keyword
    })
  }
}

export const searchNews = () => {
  return (dispatch, getState) => {
    let keyword = getState().search.term;
    _query(dispatch, keyword)
  }
}

const _query = async (dispatch, keyword) => {
  try {
    let response = await NewsService.getArticles(keyword);
    let promise = await response.json();
    dispatch({ type: SET_NEWS, payload: promise.articles })
  } catch (error) {
    console.log(error);
  }
}