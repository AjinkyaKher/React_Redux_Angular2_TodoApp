/* eslint-disable arrow-body-style */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const SummaryFooter = ({ length }) => (
  <p> {length} </p>
);

SummaryFooter.propTypes = {
  length: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
  return {
    length: state.todos.length,
  };
};

const SmartSummaryFooter = connect(mapStateToProps)(SummaryFooter);

export default SmartSummaryFooter;
