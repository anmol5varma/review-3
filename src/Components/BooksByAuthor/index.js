import React from 'react';
import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';
import './booksbyauthor.css';

const BooksByAuthor = props => (
  <div>
    <div>{props.name}</div>

  </div>
);

BooksByAuthor.propTypes = {
  value: PropTypes.string.isRequired,
  redirectBack: PropTypes.func,
};

BooksByAuthor.defaultProps = {
  redirectBack: '',
};
export default BooksByAuthor;
