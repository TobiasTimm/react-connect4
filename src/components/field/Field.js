import React from 'react';
import Paper from 'material-ui/Paper';
import './field.css';

const style = {
  height: 100,
  width: 100,
  margin: 5,
  textAlign: 'center',
  display: 'inline-block',
};

function Field({x, y, player, onClick}) {
  if (player) {
    style.backgroundColor = player.color;
  }
  return (
      <Paper style={style}  zDepth={1} circle={true} onClick={onClick}>
      </Paper>);
}

export {
  Field,
};

