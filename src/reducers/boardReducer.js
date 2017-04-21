import {Board} from '../lib/Board';
import {SET_FIELD} from '../actions/BoardActionTypes';
import update from 'immutability-helper';

const boardReducer = function boardReducer(state = new Board(), action) {
  switch (action.type) {
    case SET_FIELD:
      const {x, y, player} = action.payload;
      const newField = {...state.field(x, y), x, y, player};
      const newRow = update(this.state.row(x), {
        $splice: [[y, 1, newField]],
      });
      return update(state.fields(), {
        $splice: [[x, 1, newRow]],
      });
    default:
      return state;
  }
};

export default boardReducer;