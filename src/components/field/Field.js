import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 100,
  width: 100,
  margin: 5,
  textAlign: 'center',
  display: 'inline-block',
};

function Field({x, y, player}) {
  if (player) {
    style.backgroundColor = player.color;
  }
  return (
      <Paper style={style} zDepth={1} circle={true}>
      </Paper>);
}

export {
  Field,
};

