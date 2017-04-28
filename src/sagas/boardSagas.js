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

const getNextFreeField = (state, columnIndex) => {
  let rowsReversed = state.board.fields;
  for (let i = rowsReversed.length - 1; i >= 0; i--) {
    const row = rowsReversed[i];
    const field = row[columnIndex];
    if (!field.player) {
      return field;
    }
  }
};

function* addCurrentPlayerToField(action) {
  const {y} = action.payload;
  const field = yield select(getNextFreeField, y);
  const currentPlayer = yield select(getCurrentPlayer);
  if (field) {
    yield put(setField(field.x, field.y, currentPlayer));
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