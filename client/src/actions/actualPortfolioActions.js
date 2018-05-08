import * as types from '../constants/ActionTypes.js';

export default function updateActual(index, value) {
  return {
    type: types.UPDATE_ACTUAL,
    index,
    value,
  }
}