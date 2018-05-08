import React from 'react';

const PortfolioInput = ({ updateActual, assetType }) => {
  return (
    <div>
      <input defaultValue={assetType} />
    </div>
  )
}

export default PortfolioInput;