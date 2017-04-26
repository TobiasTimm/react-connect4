import {ADD_TURN, NEXT_PLAYER, RESET_TO_PLAYER, SET_CURRENT_PLAYER} from './CurrentPlayerActionTypes';

const nextPlayer = function nextPlayer() {
  return {type: NEXT_PLAYER, payload: {}};
};

const setCurrentPlayer = function setCurrentPlayer(player) {
  return {type: SET_CURRENT_PLAYER, payload: {player}};
};

const resetToPlayer = function resetToPlayer(player) {
  return {type: RESET_TO_PLAYER, payload: {player}};
};

const addTurn = function () {
  return {type: ADD_TURN};
};

export {
  nextPlayer,
  setCurrentPlayer,
  resetToPlayer,
  addTurn,
};