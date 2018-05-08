import React from 'react';
import updateTolerance from '../actions/toleranceActions.js'

const ToleranceRange = ({ dispatch }) => {
  const handleChange = (e) => {
    dispatch(updateTolerance(e.target.value));
  }
  return (
    <div className='tolerance_form'> 
    <h4> Enter Your Risk Tolerance Level (1 = very few years until retirements/retired and 10 = 50+ years until retirement) </h4>
      <input defaultValue='1' type='number' min='1' max='10' onChange={handleChange}/>
    </div>
  )
}

export default ToleranceRange;