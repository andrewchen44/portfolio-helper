import * as types from '../constants/ActionTypes';

const initialState = 1;

export default function tolerance(state = initialState, action) {
  switch(action.type) {
    case types.UPDATE_TOLERANCE:
      return action.tolerance;
    default:
      return state;
  }
}