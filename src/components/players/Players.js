import React from 'react';
import './players.css';

function Players({players}) {
  return (
      <ul className='playersList'>
        {players.map((player, index) => {

          const circleStyle = {
            backgroundColor: player.color,
          };
          return (
              <li className='playerItem' key={`player-${index}`}>
                <div className='playerItemContent'>
                  <label>{player.name}</label>
                  <div style={circleStyle} className='playerCircle'></div>
                </div>
              </li>);
        })}
      </ul>
  );
}

export {
  Players,
};