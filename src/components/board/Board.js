import React from 'react';
import {FieldRow} from '../field-row/FieldRow';
import './board.css'

function Board({board, onFieldClick}) {
  return (
      <div className="board">
        {board.fields.map((row, index) => {
          return <FieldRow key={`row-${index}`} fields={row} onFieldClick={onFieldClick} />
        })}
      </div>);
}

export {
  Board,
};

