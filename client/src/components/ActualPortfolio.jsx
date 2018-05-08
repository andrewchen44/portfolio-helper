import React from 'react';
import PortfolioInput from './PortfolioInput.jsx'

const ActualPortfolio = ({ assetTypes, dispatch }) => {
  const updateActual = (dispatch) => {

  }
  return( 
    <div>
      Please enter your actual portfolio amounts to calculate the adjustments needed
      <div>
        {assetTypes.map((assetType, index) => {
          return (<div key={index} >
            {assetType}
            <PortfolioInput assetType={assetType} updateActual={updateActual}/>
          </div>)
        })}
      </div>
    </div>
  )
}

export default ActualPortfolio;