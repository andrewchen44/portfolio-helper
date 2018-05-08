import React from 'react';
import updateTolerance from '../../actions/toleranceActions'
import updateIdeal from '../../actions/idealPortfolioActions'


const ToleranceRange = ({ dispatch }) => {
  const handleChange = (e) => {
    dispatch(updateTolerance(e.target.value));
    dispatch(updateIdeal(e.target.value));
  }
  return (
    <div className='tolerance_form'> 
    <h4> 
      <div>Please Enter Your Risk Tolerance Level</div>
        <div>(1 for risk adverse and 10 for risk tolerant)</div>
        </h4>
      <input className='tolerance_input' type='number' min='1' max='10' onChange={handleChange}/>
    </div>
  )
}

export default ToleranceRange;