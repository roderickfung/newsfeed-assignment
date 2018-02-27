import React from 'react';
import SearchForm from '../../components/searchForm';
import NewsFeed from '../../components/newsFeed';
import './style.css';

class Main extends React.Component {

  render() {
    return (
      <div className='container'>
        <SearchForm />
        <NewsFeed />
      </div>
    )
  }


}

export default Main;