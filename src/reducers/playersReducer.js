import {RESET_TURNS} from '../actions/PlayersActionTypes';

const playersReducer = function playersReducer(state = [], action) {
  switch (action.type) {
    case RESET_TURNS:
      return [...state, ...state.map((player) => {
        return {...player, turns: 0};
      })];
    default:
      return state;
  }
};

export default playersReducer;