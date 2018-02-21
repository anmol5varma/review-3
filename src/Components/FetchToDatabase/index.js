import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
// import ReactDOM from 'react-dom';
import './fetchtodb.css';

const fetchDB = () => {
  fetch('/api2').then(response => response.json()).then();
};

const FetchToDatabase = props => (
  <div className="ErrorScreen">
    <p>Oops! No books found!</p>
    <p>Import them now ?</p>
    <button className="refresh-button" onClick={fetchDB}>
      <Icon iconClass="refresh" />
    </button>
  </div>
);

FetchToDatabase.propTypes = {
  value: PropTypes.string.isRequired,
  redirectBack: PropTypes.func,
};

FetchToDatabase.defaultProps = {
  redirectBack: '',
};
export default FetchToDatabase;
