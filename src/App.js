import React from 'react';
import './App.css';
import GameBoard from './layouts/game-board/GameBoard';
import AppBar from 'material-ui/AppBar';

function App() {
  return (
      <div>
        <AppBar title="react-connect4" showMenuIconButton={false}/>
        <div>
          <GameBoard />
        </div>
      </div>
  );
}

export default App;
