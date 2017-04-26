import {combineReducers} from 'redux';
import board from './boardReducer';
import currentPlayer from './currentPlayerReducer';
import players from './playersReducer';
import rules from './rulesReducer';

const rootReducer = combineReducers({
  board, currentPlayer, players, rules,
});

export default rootReducer;