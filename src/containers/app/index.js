import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../../reducers';
import Main from '../main';
import './style.css';

const store = createStore(
  reducers, {},
  compose(
    applyMiddleware(ReduxThunk)
  )
);

class App extends Component {

  
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
