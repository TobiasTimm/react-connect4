import React, {Component} from 'react';
import './App.css';
import GameBoard from './layouts/game-board/GameBoard';
import AppBar from 'material-ui/AppBar';

class App extends Component {
  render() {
    return (
        <div>
          <AppBar title="react-connect4" showMenuIconButton={false}/>
          <div>
            <GameBoard />
          </div>
        </div>
    );
  }
}

export default App;
