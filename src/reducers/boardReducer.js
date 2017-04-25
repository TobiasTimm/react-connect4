import {Board} from '../lib/Board';
import {RESET_BOARD, SET_FIELD} from '../actions/BoardActionTypes';
import update from 'immutability-helper';

const boardReducer = function boardReducer(state = Board(), action) {
  switch (action.type) {
    case SET_FIELD:
      const {x, y, player} = action.payload;
      const newField = {...state.fields[x][y], x, y, player, empty: false};
      const newRow = update(state.fields[x], {
        $splice: [[y, 1, newField]],
      });
      return {
        ...state, fields: update(state.fields, {
          $splice: [[x, 1, newRow]],
        }),
      };
    case RESET_BOARD:
      return Board();
    default:
      return state;
  }
};

export default boardReducer;