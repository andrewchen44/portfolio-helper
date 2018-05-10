import React from 'react';
import DonutChart from 'react-donut-chart';

const PortfolioChart = ({ assetTypes, tolerance, idealPortfolio}) => {
  const data = idealPortfolio.map((assetWeight, index) => {
    return {
      label: assetTypes[index],
      value: assetWeight,
    }
  });
  return (
    <div className='ideal-portfolio_chart'>
      <div>Your Ideal Portolfio in Percentages</div>
        <DonutChart className='donut_chart'
          data={data}
        />
    </div>
  )
}

export default PortfolioChart;