import * as types from '../constants/ActionTypes';

const initialState = [0, 0, 0, 0, 0];

export default function actualPortfolio(state = initialState, action) {
  switch(action.type) {
    case types.UPDATE_ACTUAL:
      let newActual = state.slice(0, state.length);
      newActual[action.index] = Number(action.value);
      return newActual;
    default:
      return state;
  }
}