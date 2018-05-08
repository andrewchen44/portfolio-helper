import React from 'react';
import { connect } from 'react-redux';
import PortfolioChart from '../components/PortfolioChart.jsx';

const ChartContainer = props => (
  <PortfolioChart {...props} />
);

const mapStateToProps = ({ assetTypes, tolerance, portfolio }) => {
  return {
    assetTypes,
    tolerance,
    portfolio,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChartContainer);