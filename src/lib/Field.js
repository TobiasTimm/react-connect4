class Field {

  constructor(x, y) {
    this._x = x;
    this._y = y;
    this._empty = true;
    this._player = undefined;
  }

  player(player) {
    this._player = player;
  }

  isEmpty() {
    return this._empty;
  }

  isSet() {
    return !this._empty;
  }

  hasSamePlayer(player) {
    return this._player === player;
  }

  x() {
    return this._x;
  }

  y() {
    return this._y;
  }

}

export {Field};