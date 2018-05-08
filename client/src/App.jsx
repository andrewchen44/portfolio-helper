import React from 'react';
import ToleranceContainer from './containers/ToleranceContainer.jsx';
import ChartContainer from './containers/ChartContainer.jsx';
import ActualContainer from './containers/ActualContainer.jsx';
import RebalanceChart from './components/RebalanceChart.jsx';


const App = (props) => {
  return (
    <div className='app_container'>
      <ToleranceContainer />
      <ChartContainer />
      <ActualContainer />
      <RebalanceChart />
    </div>
  )
}

export default App;
