import {NEXT_PLAYER, SET_CURRENT_PLAYER} from '../actions/CurrentPlayerActionTypes';
import {put, select, takeEvery} from 'redux-saga/effects';

function* watchNextPlayer() {
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

export {
  watchNextPlayer,
};