import React from 'react';
import RebalanceItem from './RebalanceItem.jsx';

const RebalanceChart = ({ assetTypes, actualPortfolio, idealPortfolio}) => {
  let totalPortfolio = 0;
  actualPortfolio.forEach((assetValue) => {
    totalPortfolio += assetValue;
  })
  return ( 
    <div className="rebalance-chart_container">
      <h4>Changes Required to Get to Ideal Portfolio</h4>
      <div className="rebalance-chart_items">
        {assetTypes.map((assetType, index) => {
          const rebalanceAmount = ((totalPortfolio * (idealPortfolio[index] / 100)) - actualPortfolio[index]).toFixed(2);
          return <RebalanceItem assetType={assetType} rebalanceAmount={rebalanceAmount} />;
        })}
      </div>
    </div>
  );
}


export default RebalanceChart;
