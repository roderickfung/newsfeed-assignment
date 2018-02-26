import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import Article from '../article'

class NewsFeed extends React.Component {

  renderArticles() {
    if (this.props.news) {
      return this.props.news.map((article, index) => 
        <Article key={index} data={article} />
      )
    } else {
      return <span className='no-articles'>Find news that matters to you.</span>
    }
  }

  render() {
    return (
      <div className='container'>
        {
          this.renderArticles()
        }
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    term: state.search.term,
    news: state.newsfeed.articles
  }
}

export default connect(mapStateToProps, {})(NewsFeed)