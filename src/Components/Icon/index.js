import React from 'react';
import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';
import './icon.css';

const Icon = props => (
  <div className="Icon-wrapper">
    <i className="material-icons Icon-style">{props.iconClass}</i>
  </div>
);

Icon.propTypes = {
  iconClass: PropTypes.string,
};

Icon.defaultProps = {
  iconClass: '',
};
export default Icon;
