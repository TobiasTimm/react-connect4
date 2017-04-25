import React from 'react';
import {FieldRow} from '../field-row/FieldRow';
import './board.css'

function Board({board, setField}) {
  return (
      <div className="board">
        {board.fields().map((row, index) => {
          return <FieldRow key={`row-${index}`} fields={row} onFieldClick={setField} />
        })}
      </div>);
}

export {
  Board,
};

