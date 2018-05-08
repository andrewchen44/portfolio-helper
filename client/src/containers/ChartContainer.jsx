import React from 'react';
import { connect } from 'react-redux';
import PortfolioChart from '../components/idealPortfolio/PortfolioChart.jsx';

const ChartContainer = props => (
  <PortfolioChart {...props} />
);

const mapStateToProps = ({ assetTypes, idealPortfolio }) => {
  return {
    assetTypes,
    idealPortfolio,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChartContainer);
