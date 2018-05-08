import React from 'react';
import { connect } from 'react-redux';
import RebalanceChart from '../components/actualPortfolio/RebalanceChart.jsx';

const RebalanceContainer = (props) => (
  <RebalanceChart {...props} />
)

const mapStateToProps = ({ assetTypes, idealPortfolio, actualPortfolio }) => {
  return {
    assetTypes: assetTypes,
    actualPortfolio: actualPortfolio,
    idealPortfolio: idealPortfolio,
  };
}

export default connect(mapStateToProps)(RebalanceContainer);
