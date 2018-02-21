import React from 'react';
import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';
import './header.css';

const Header = props => (
  <header className="Header">{props.value}</header>
);

Header.propTypes = {
  value: PropTypes.string.isRequired,
};
export default Header;
