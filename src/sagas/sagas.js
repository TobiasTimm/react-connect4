import {NEXT_PLAYER, SET_CURRENT_PLAYER} from '../actions/PlayerActionTypes';
import {fork, put, select, takeEvery} from 'redux-saga/effects';
import {SET_FIELD_ON_BOARD} from '../actions/BoardActionTypes';
import {setField} from '../actions/BoardActions';
import {nextPlayer} from '../actions/PlayerActions';

function* root() {
  yield[fork(watchPlayers), fork(watchFields)];
}

function* watchPlayers() {
  yield takeEvery(NEXT_PLAYER, setNextPlayer);
}

const getPlayerState = (state) => {
  return {
    currentPlayer: state.currentPlayer,
    players: state.players,
  };
};

function* setNextPlayer(action) {
  const {players, currentPlayer} = yield select(getPlayerState);
  const index = players.findIndex((player) => {
    return player.name === currentPlayer.name;
  });

  let nextPlayer;
  if (index >= 0 && index < players.length - 1) {
    nextPlayer = players[index + 1];
  } else {
    nextPlayer = players[0];
  }
  yield put({
    type: SET_CURRENT_PLAYER, payload: {player: nextPlayer},
  });
}

const getCurrentPlayer = (state) => {
  return state.currentPlayer;
};

const getCurrentField = (state, x, y) => {
  return state.board.fields[x][y];
};

function* watchFields() {
  yield takeEvery(SET_FIELD_ON_BOARD, addCurrentPlayerToField);
}

function* addCurrentPlayerToField(action) {
  const {x, y} = action.payload;
  const currentField = yield select(getCurrentField, x, y);
  const currentPlayer = yield select(getCurrentPlayer);
  if (!currentField.player) {
    yield put(setField(x, y, currentPlayer));
    yield put(nextPlayer());
  }
}

export default root;