import React from 'react';

const RebalanceItem = ({ assetType, rebalanceAmount }) => {
  let rebalance = '$' + rebalanceAmount.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  let icon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Green-Up-Arrow.svg/2000px-Green-Up-Arrow.svg.png';
  if (rebalanceAmount > 0) {
    rebalance = `+ ${rebalance}`;
  } else if (rebalanceAmount < 0) {
    icon = 'http://www.clker.com/cliparts/d/A/H/R/z/3/red-down-arrow-hi.png';
  } else {
    icon = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIu7OTcjmNy5Gy0MUiefPtlIXJdhb68BUINeCHhZnX-NrNDVWt';
  }
  return ( 
    <div className='rebalance_item' >
      <div className='asset_change'>{assetType}: {rebalance}</div>
      <div><img className='rebalance_icon' src={icon} /></div>
    </div>
  )
}

export default RebalanceItem;
