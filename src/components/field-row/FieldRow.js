import React from 'react';
import {Field} from '../field/Field';

function FieldRow({fields}) {
  return (
      <div>
        {fields.map((field, index) => {
          return <Field key={`field-x-${field.x}-y-${field.y}`}{...field}/>;
        })}
      </div>);
}

export {
  FieldRow,
};

