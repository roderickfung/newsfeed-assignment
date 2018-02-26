import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import {
  setTerm,
  searchNews
} from '../../actions'

class SearchForm extends React.Component {

  submitSearch = (event) => {
    this.props.searchNews();
    event.preventDefault();
  }

  updateSearchTerm = (event) => {
    this.props.setTerm(event.target.value);
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
            value={this.props.term}
            onChange={this.updateSearchTerm} />
        </div>
        <button onClick={this.submitSearch}>Find News</button>
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
  setTerm,
  searchNews
})(SearchForm)