import React from 'react';
import './players.css';
import {Avatar, List, ListItem, Subheader} from 'material-ui';

function Players({players}) {
  return (

      <List>
        <Subheader>Players</Subheader>
        {players.map((player, index) => {
          return (
              <ListItem key={`player-${index}`}
                        primaryText={player.name}
                        leftAvatar={<Avatar backgroundColor={player.color}/>}
              />);
        })}
      </List>
  );
}

export {
  Players,
};