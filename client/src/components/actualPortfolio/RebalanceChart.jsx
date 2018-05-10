import React from 'react';
import RebalanceItem from './RebalanceItem.jsx';

const RebalanceChart = ({ assetTypes, actualPortfolio, idealPortfolio}) => {
  let totalPortfolio = 0;
  actualPortfolio.forEach((assetValue) => {
    totalPortfolio += assetValue;
  });
  return ( 
    <div className="container">
      <div className='header'>Changes Required to Get to Ideal Portfolio</div>
      <div className="rebalance-chart_items display_row_container">
        {assetTypes.map((assetType, index) => {
          const rebalanceAmount = ((totalPortfolio * (idealPortfolio[index] / 100)) - actualPortfolio[index]).toFixed(2);
          return <RebalanceItem key={assetType} assetType={assetType} rebalanceAmount={rebalanceAmount} />;
        })}
      </div>
    </div>
  );
}

export default RebalanceChart;
