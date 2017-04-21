import {SET_CURRENT_PLAYER} from '../actions/PlayerActionTypes';

const currentPlayerReducer = function currentPlayerReducer(state = {}, action) {
  switch (action.type) {
    case SET_CURRENT_PLAYER:
      return {...state, ...action.payload.player};
    default:
      return state;
  }
};

export default currentPlayerReducer;