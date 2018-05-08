import React from 'react';
import DonutChart from 'react-donut-chart';

const PortfolioChart = ({ assetTypes, tolerance, portfolio}) => {
  const idealPortfolio = portfolio[tolerance - 1].map((assetWeight, index) => {
    return {
      label: assetTypes[index],
      value: assetWeight
    }
  });
  return (<div>
    <h4>Your Ideal Portolfio</h4>
    <DonutChart 
      data={idealPortfolio}
    />
  </div>
  )
}

export default PortfolioChart;