import * as types from '../constants/ActionTypes.js';

export default function updateIdeal(tolerance) {
  return {
    type: types.UPDATE_IDEAL,
    tolerance: tolerance,
  }
}