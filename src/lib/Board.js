import {Field} from './Field';

class Board {

  constructor() {
    this._rowCount = 6;
    this._columnCount = 7;
    this._fields = [];
    for (let rowIndex = 0; rowIndex < this._rowCount; rowIndex++) {
      let rowArray = [];
      for (let columnIndex = 0; columnIndex < this._columnCount; columnIndex++) {
        rowArray.push(new Field(rowIndex, columnIndex));
      }
      this._fields.push(rowArray);
    }

  }

  fields() {
    return this._fields;
  }

  field(x, y) {
    return this._fields[x][y];
  }

  row(x) {
    return this._fields[x];
  }

}

export {
  Board,
};