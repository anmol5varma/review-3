import React from 'react';
import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';
import './container.css';

const Container = () => (
  <div>
    <div><i className="material-icons">add_circle</i></div>
    <div>
      <i className="fas fa-camera-retro" />
    </div>
  </div>
);

Container.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Container;
