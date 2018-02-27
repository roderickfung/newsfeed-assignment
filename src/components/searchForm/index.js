import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import { searchNews } from '../../actions'

class SearchForm extends React.Component {

  constructor() {
    super()
    this.state = {
      term: ''
    }
  }

  submitSearch = (event) => {
    this.props.searchNews(this.state.term);
    event.preventDefault();
  }

  updateSearchTerm = (e) => {
    this.setState({term: e.target.value})
  }

  render() {
    return (
      <div className='container'>
        <div className='title-container'>
          <span className='title-text'>Find news that matters to you...</span>
        </div>
        <div className='search-container'>
          <input
            type='text'
            value={this.state.term}
            onChange={this.updateSearchTerm} />
        </div>
        <button
        onClick={this.submitSearch}
        disabled={!this.state.term}>Find News</button>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    term: state.search.term
  };
}

export default connect(mapStateToProps, {
  searchNews
})(SearchForm)
