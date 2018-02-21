import React from 'react';
import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';
import './bookcard.css';

class BookCard extends React.Component {
  constructor(props) {
    super();
    console.log(props, '*');
    this.state = {
      like: props.bookDetails.like,
      likeButtonClass: '',
    };
  }

  componentDidMount() {
    // console.log(this.state);
    if (this.state.like === 'true') {
      this.setState({
        likeButtonClass: 'material-icons',
      });
    } else {
      this.setState({
        likeButtonClass: 'material-icons unlike',
      });
    }
  }

  render() {
    return (
      <div className="Book-container">
        <div className="Book-image-wrapper" />
        <div className="Book-details">
          <div className="Book-like">
            <button
              className="likeButton"
              onClick={() => {
              if (this.state.like === 'true') {
                fetch(`/book/dislike/${this.props.bookDetails.bookid}`).then(() => {
                  this.setState({
                    like: 'false',
                    likeButtonClass: 'material-icons unlike',
                  });
                });
              } else {
                fetch(`/book/like/${this.props.bookDetails.bookid}`).then(() => {
                  this.setState({
                    like: 'true',
                    likeButtonClass: 'material-icons',
                  });
                });
              }
            }}
            ><i className={this.state.likeButtonClass}>thumb_up</i>
            </button>
          </div>
          <div className="Book-name">{this.props.bookDetails.name}</div>
          <div className="Book-rating">{this.props.bookDetails.rating}</div>
          <div className="Book-author">{this.props.bookDetails.author}</div>
        </div>
      </div>
    );
  }
}

BookCard.propTypes = {
  bookDetails: PropTypes.object.isRequired,
};

export default BookCard;
