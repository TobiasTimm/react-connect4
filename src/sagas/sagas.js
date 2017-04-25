import {NEXT_PLAYER, SET_CURRENT_PLAYER} from '../actions/PlayerActionTypes';
import {takeEvery, fork, put, select} from 'redux-saga/effects';

function* root() {
  yield[fork(watchPlayers)];
}

function* watchPlayers() {
  yield takeEvery(NEXT_PLAYER, nextPlayer);
}

const getPlayerState = (state) => {
  return {
    currentPlayer: state.currentPlayer,
    players: state.players,
  };
};

function* nextPlayer(action) {
  const {players, currentPlayer} = yield select(getPlayerState);
  const index = players.indexOf(currentPlayer);

  let nextPlayer;
  if (index >= 0 && index < players.length - 1) {
    if (index === players.length) {
      nextPlayer = players[0];
    } else {
      nextPlayer = players[index + 1];
    }
  } else {
    nextPlayer = players[0];
  }
  yield put({
    type: SET_CURRENT_PLAYER, payload: {player: nextPlayer},
  });
}

export default root;