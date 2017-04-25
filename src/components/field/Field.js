import React from 'react';
import Paper from 'material-ui/Paper';
import './field.css';
import {Colors} from '../../lib/Color';

function Field({x, y, player, onClick}) {
  let style = {
    height: 100,
    width: 100,
    margin: 5,
    textAlign: 'center',
    display: 'inline-block',
    cursor: 'pointer',
  };
  if (player) {
    let gradientColor = player.color === Colors.RED ? '#ff1a00' : '#febf04';
    let backgroundStyle = {
      background: player.color,
      cursor: 'not-allowed',
      // eslint-disable-next-line
      background: `-moz-linear-gradient(top, ${player.color} 0%,  ${gradientColor}  100%)`,
      // eslint-disable-next-line
      background: `-webkit-linear-gradient(top, ${player.color} 0%, ${gradientColor}  100%)`,
      // eslint-disable-next-line
      background: `linear-gradient(to bottom, ${player.color} 0%, ${gradientColor}  100%)`,
    };
    style = {...style, ...backgroundStyle};
  }

  const handleOnClick = (e) => {
    onClick(x, y, player);
  };

  return (
      <Paper style={style} zDepth={1} circle={true} onClick={handleOnClick}>
      </Paper>);
}

export {
  Field,
};

