import React from 'react';
import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';
import './booksbyauthor.css';
import BookCardList from '../BookCardList';

const BooksByAuthor = props => (
  <div className="Author-list">
    <div className="Author-name">{props.name}</div>
    <div><BookCardList bookslist={props.bookslist} /></div>
  </div>
);

BooksByAuthor.propTypes = {
  name: PropTypes.string,
  bookslist: PropTypes.array,
};

BooksByAuthor.defaultProps = {
  name: '',
  bookslist: [],
};
export default BooksByAuthor;
