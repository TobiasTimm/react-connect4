import React from 'react';
import {FieldRow} from '../field-row/FieldRow';

function Board({board}) {
  return (
      <div>
        {board.fields().map((row, index) => {
          return <FieldRow key={`row-${index}`} fields={row} />
        })}
      </div>);
}

export {
  Board,
};

