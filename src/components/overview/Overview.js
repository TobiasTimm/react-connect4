import React from 'react';
import './overview.css';
import {Avatar, Divider, List, ListItem, RaisedButton, Subheader} from 'material-ui';
import ContentUndo from 'material-ui/svg-icons/content/undo';
import Timer from 'material-ui/svg-icons/image/timer';

const styles = {
  button: {
    margin: 12,
  },
};

function Overview({currentPlayer, restartGame, rules}) {
  return (
      <div className="overview">
        <List>
          <Subheader>Turn</Subheader>
          <ListItem
              primaryText={currentPlayer.name}
              secondaryText={`${currentPlayer.turns} / ${rules.maxPlayerTurns}`}
              leftAvatar={<Avatar backgroundColor={currentPlayer.color}/>}
              disabled={true}/>
        </List>
        <Divider  />
        <List>
          <Subheader>Stats</Subheader>
          <ListItem primaryText="Timer"
                    leftIcon={<Timer />}
                    disabled={true}
          />
        </List>
        <div className="overview-controls">
          <RaisedButton
              label="Restart"
              labelPosition="after"
              primary={true}
              icon={<ContentUndo />}
              style={styles.button}
              onClick={restartGame}
          />
        </div>
      </div>
  );
}

export {
  Overview,
};
