import React from 'react';
import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';
import './bookcardlist.css';
import BookCard from '../BookCard';

class BookCardList extends React.Component {
  render() {
    const populateCards = () => this.props.bookslist
      .map(eachBookObject => <BookCard bookDetails={eachBookObject} />);

    return (
      <div className="Card-wrapper">
        {populateCards()}
      </div>
    );
  }
}

BookCardList.propTypes = {
  bookslist: PropTypes.array,
};

BookCardList.defaultProps = {
  bookslist: [],
};
export default BookCardList;
