import {RESET_BOARD, SET_FIELD_ON_BOARD} from '../actions/BoardActionTypes';
import {put, select, takeEvery} from 'redux-saga/effects';
import {nextPlayer, resetToPlayer} from '../actions/CurrentPlayerActions';
import {setField} from '../actions/BoardActions';
import {resetTurns} from '../actions/PlayersActions';

function* watchFieldsOnBoard() {
  yield takeEvery(SET_FIELD_ON_BOARD, addCurrentPlayerToField);
}

const getCurrentPlayer = (state) => {
  return state.currentPlayer;
};
const getCurrentField = (state, x, y) => {
  return state.board.fields[x][y];
};

function* addCurrentPlayerToField(action) {
  const {x, y} = action.payload;
  const currentField = yield select(getCurrentField, x, y);
  const currentPlayer = yield select(getCurrentPlayer);
  if (!currentField.player) {
    yield put(setField(x, y, currentPlayer));
    yield put(nextPlayer());
  }
}

function* watchRestart() {
  yield takeEvery(RESET_BOARD, restartGame);
}

const getPlayers = (state) => {
  return state.players;
};

function* restartGame() {
  const players = yield select(getPlayers);
  yield put(resetToPlayer(players[0]));
  yield put(resetTurns());
}

export {
  watchFieldsOnBoard,
  watchRestart,
};