import {RESET_BOARD, SET_FIELD, SET_FIELD_ON_BOARD} from './BoardActionTypes';

const setField = function setField(x, y, player) {
  return {
    type: SET_FIELD,
    payload: {
      x, y, player,
    },
  };
};

const setFieldOnBoard = function setField(x, y) {
  return {
    type: SET_FIELD_ON_BOARD,
    payload: {
      x, y,
    },
  };
};

const resetBoard = function resetBoard() {
  return {
    type: RESET_BOARD,
  };
};

export {
  setField,
  setFieldOnBoard,
  resetBoard,
};