import React, { PropTypes } from 'react';
import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab';
import { setVisibilityFilter } from '../actions';
import { connect } from 'react-redux';

const Filters = ({ dispatch }) => (
  <Tabs justified initialSelectedIndex={0}>
    <Tab label="All" onActive={() => { dispatch(setVisibilityFilter('SHOW_ALL')); }} />
    <Tab label="Active" onActive={() => { dispatch(setVisibilityFilter('SHOW_ACTIVE')); }} />
    <Tab label="Completed" onActive={() => { dispatch(setVisibilityFilter('SHOW_COMPLETED')); }} />
  </Tabs>
);

Filters.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Filters);
