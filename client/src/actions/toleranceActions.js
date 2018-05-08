import * as types from '../constants/ActionTypes.js';

export default function updateTolerance(tolerance) {
  return {
    type: types.UPDATE_TOLERANCE,
    tolerance: tolerance,
  }
}