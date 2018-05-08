import { combineReducers } from 'redux';
import tolerance from './tolerance';
import portfolio from './portfolio';
import assetTypes from './assetTypes';

const rootReducer = combineReducers({
  tolerance,
  portfolio,
  assetTypes,
});

export default rootReducer;
