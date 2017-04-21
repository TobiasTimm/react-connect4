class Field {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.empty = true;
    this.player = undefined;
  }

  player(player) {
    this.player = player;
  }

  isEmpty() {
    return this.empty;
  }

  isSet() {
    return !this.empty;
  }

  hasSamePlayer(player) {
    return this.player === player;
  }

}

export {Field};