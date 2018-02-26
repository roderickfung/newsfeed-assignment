import {
  SET_TERM,
  RESET_TERM
} from '../constants/actiontypes';

const init = {
  term: '',
}

export default (state = init, action) => {
  switch (action.type) {
    case SET_TERM:
      return { ...state, term: action.payload };
    case RESET_TERM:
      return { ...init };
    default:
      return state;
  }
}