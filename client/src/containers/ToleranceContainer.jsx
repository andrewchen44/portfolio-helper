import React from 'react';
import { connect } from 'react-redux';
import ToleranceRange from '../components/idealPortfolio/ToleranceRange.jsx';

const ToleranceContainer = (props) => (
  <ToleranceRange {...props} />
);

export default connect()(ToleranceContainer);