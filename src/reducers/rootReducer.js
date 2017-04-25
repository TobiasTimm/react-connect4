import {combineReducers} from 'redux';
import board from './boardReducer';
import currentPlayer from './currentPlayerReducer';
import players from './playersReducer';

const rootReducer = combineReducers({
  board, currentPlayer, players
});

export default rootReducer;