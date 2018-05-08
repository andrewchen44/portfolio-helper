import * as types from '../constants/ActionTypes';

const initialState = 1;

export default function tolerance(state = initialState, action) {
  switch(action.type) {
    case types.UPDATE_TOLERANCE:
    console.log('getting in tolerance reducer')
      return action.tolerance;
    default:
      return state;
  }
}