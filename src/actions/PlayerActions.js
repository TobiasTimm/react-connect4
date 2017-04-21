import {NEXT_PLAYER, SET_CURRENT_PLAYER} from './PlayerActionTypes';

const nextPlayer = function nextPlayer() {
  return {type: NEXT_PLAYER, payload: {}};
};

const setCurrentPlayer = function setCurrentPlayer(player) {
  return {type: SET_CURRENT_PLAYER, payload: {player}};
};

export {
  nextPlayer,
  setCurrentPlayer,
};