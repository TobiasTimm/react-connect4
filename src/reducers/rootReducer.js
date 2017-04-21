import {combineReducers} from 'redux';
import board from './boardReducer';
import currentPlayer from './currentPlayerReducer';

const rootReducer = combineReducers({
  board, currentPlayer
});

export default rootReducer;