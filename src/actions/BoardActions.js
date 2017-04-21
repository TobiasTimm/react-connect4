const setField = function setField(x, y, player) {
  return {
    type: SET_FIELD,
    payload: {
      x, y, player,
    },
  };
};

export {
  setField,
};