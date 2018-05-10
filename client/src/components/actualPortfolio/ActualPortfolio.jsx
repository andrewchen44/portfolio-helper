import React from 'react';
import PortfolioInput from './PortfolioInput.jsx';

const ActualPortfolio = ({ assetTypes, dispatch }) => {
  return( 
    <div className='container actual-portfolio_inputs_container'>
      <div className='header'>
        Please Enter Your Actual Potfolio Amounts in Dollars
      </div >
      <div className='display_row_container'>
        {assetTypes.map((assetType, index) => {
          return (<div className='actual-portfolio_input ' key={index} >
            {assetType}
            <PortfolioInput index={index} dispatch={dispatch}/>
          </div>)
        })}
      </div>
    </div>
  )
}

export default ActualPortfolio;