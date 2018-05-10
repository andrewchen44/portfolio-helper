import React from 'react';
import ToleranceContainer from './containers/ToleranceContainer.jsx';
import ChartContainer from './containers/ChartContainer.jsx';
import ActualContainer from './containers/ActualContainer.jsx';
import RebalanceChart from './containers/RebalanceContainer.jsx';


const App = (props) => {
  return (
    <div className="app_container">
      <div className="ideal-portfolio_container container">
        <ToleranceContainer />
        <ChartContainer />
      </div>
      <div className="actual-portfolio_container container">
        <ActualContainer />
        <RebalanceChart />
      </div>
    </div>
  );
}

export default App;
