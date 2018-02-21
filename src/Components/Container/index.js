import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Booklist from '../Booklist';
// import ReactDOM from 'react-dom';
import './container.css';

const Container = () => (
  <div className="Container">
    <Header headerTitle="The Book Shelf" className="Container-header" />
    <Booklist />
  </div>
);

export default Container;
