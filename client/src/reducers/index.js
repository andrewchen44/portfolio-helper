import { combineReducers } from 'redux';
import idealPortfolio from './idealPortfolio';
import actualPortfolio from './actualPortfolio';
import assetTypes from './assetTypes';

const rootReducer = combineReducers({
  idealPortfolio,
  actualPortfolio,
  assetTypes,
});

export default rootReducer;
