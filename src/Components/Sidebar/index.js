import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
// import ReactDOM from 'react-dom';
import './sidebar.css';

const Header = props => (
  <header className="Header">
    <div className="Header-title">{props.value}</div>
    <div className="Header-serviceIcons">
      <Icon iconClass="settings" />
      <Icon iconClass="refresh" />
    </div>
  </header>
);

Header.propTypes = {
  value: PropTypes.string.isRequired,
};
export default Header;
