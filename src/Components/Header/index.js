import React from 'react';
import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';
import './header.css';

const Header = props => (
  <header>
    <div className="Container-header">
      <div className="Container-title">{props.headerTitle}</div>
    </div>
  </header>
);

Header.propTypes = {
  headerTitle: PropTypes.string.isRequired,
};

export default Header;
