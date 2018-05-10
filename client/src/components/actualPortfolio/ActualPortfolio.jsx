import React from 'react';
import PortfolioInput from './PortfolioInput.jsx';

const ActualPortfolio = ({ assetTypes, dispatch }) => {
  return( 
    <div className='actual-portfolio_inputs_container'>
      <h4>
        Please Enter Your Actual Potfolio Amounts in Dollars
      </h4>
      <div className='actual-portfolio_inputs'>
        {assetTypes.map((assetType, index) => {
          return (<div className='actual-portfolio_input' key={index} >
            {assetType}
            <PortfolioInput index={index} dispatch={dispatch}/>
          </div>)
        })}
      </div>
    </div>
  )
}

export default ActualPortfolio;