import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
// import ReactDOM from 'react-dom';
import './fetchtodb.css';

const FetchToDatabase = props => (
  <div className="ErrorScreen">
    <p>Oops! No books found!</p>
    <p>Import them now ?</p>
    <Icon iconClass="refresh" />
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
