import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { populateTheStore } from '../../redux/actions';
import BooksByAuthor from '../BooksByAuthor';
import './booklist.css';

class Booklist extends React.Component {
  componentDidMount() {
    fetch('/books/group').then(response => response.json()).then((bookList) => {
      // console.log(bookList);
      this.props.loadBooksToStore(bookList);
    });
  }

  render() {
    const getDifferentAuthor = () => {
      const authorComponentList = [];
      for (const authorName in this.props.allBookList) {
        authorComponentList.push(<BooksByAuthor name={authorName} bookslist={this.props.allBookList[authorName]} />);
      }
      console.log(authorComponentList, '**');
      return authorComponentList;
    };
    return (
      <div>
        {getDifferentAuthor()}
      </div>
    );
  }
}

Booklist.propTypes = {
  loadBooksToStore: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  allBookList: state.books.groupedBookList,
});

const mapDispatchToProps = dispatch => ({
  loadBooksToStore: bookList => dispatch(populateTheStore(bookList)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Booklist);
