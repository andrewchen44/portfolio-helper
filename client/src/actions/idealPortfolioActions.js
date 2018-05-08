import * as types from '../constants/ActionTypes';

export default function updateIdeal(tolerance) {
  return {
    type: types.UPDATE_IDEAL,
    tolerance: tolerance,
  };
}
