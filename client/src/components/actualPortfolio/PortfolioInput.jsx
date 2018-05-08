import React from 'react';
import updateActual from '../../actions/actualPortfolioActions';

const PortfolioInput = ({ dispatch, assetType, index }) => {
  const handleChange = (e) => {
    dispatch(updateActual(index, e.target.value));
  }
  return (
    <div>
      <input className='actual_input' type='number' onChange={handleChange} />
    </div>
  )
}

export default PortfolioInput;