import React from 'react';
import {Field} from '../field/Field';
import './field-row.css';

function FieldRow({fields, onFieldClick}) {
  return (
      <div className="field-row">
        {fields.map((field, index) => {
          return <Field key={`field-x-${field.x}-y-${field.y}`}
                        onClick={onFieldClick} {...field}/>;
        })}
      </div>);
}

export {
  FieldRow,
};

