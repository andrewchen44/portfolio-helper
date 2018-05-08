import { combineReducers } from 'redux';
import tolerance from './tolerance';
import idealPortfolio from './idealPortfolio';
import actualPortfolio from './actualPortfolio';
import assetTypes from './assetTypes';

const rootReducer = combineReducers({
  tolerance,
  idealPortfolio,
  actualPortfolio,
  assetTypes,
});

export default rootReducer;
