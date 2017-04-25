import {Field} from './Field';

function Board() {
  let board = {
    rowCount: 6,
    columnCount: 7,
    fields: [],
  };
  for (let rowIndex = 0; rowIndex < board.rowCount; rowIndex++) {
    let rowArray = [];
    for (let columnIndex = 0; columnIndex < board.columnCount; columnIndex++) {
      rowArray.push(Field(rowIndex, columnIndex));
    }
    board.fields.push(rowArray);
  }
  return board;
}
export {
  Board,
};
