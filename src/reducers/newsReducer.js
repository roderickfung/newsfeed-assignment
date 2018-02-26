import {
  SET_NEWS,
  RESET_NEWS
} from '../constants/actiontypes';

const init = {
  articles: null
}

export default (state = init, action) => {
  switch (action.type) {
    case SET_NEWS:
      return { ...state, articles: action.payload };
    case RESET_NEWS:
      return { ...init };
    default:
      return state;
  }
}