import { combineReducers } from 'redux';
import SearchReducer from './searchReducer'
import NewsFeedReducer from './newsReducer'

export default combineReducers({
  newsfeed: NewsFeedReducer,
  search: SearchReducer
});