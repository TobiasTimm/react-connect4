import {RESET_TURNS} from './PlayersActionTypes';

const resetTurns = function resetTurns() {
  return {type: RESET_TURNS};
};

export {
  resetTurns,
};