import {ADD_TURN, RESET_TO_PLAYER, SET_CURRENT_PLAYER} from '../actions/CurrentPlayerActionTypes';

const currentPlayerReducer = function currentPlayerReducer(state = {}, action) {
  switch (action.type) {
    case SET_CURRENT_PLAYER:
    case RESET_TO_PLAYER:
      return {...state, ...action.payload.player};
    case ADD_TURN:
      return {...state, turn: state.turn + 1};
    default:
      return state;
  }
};

export default currentPlayerReducer;