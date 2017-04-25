import React from 'react';
import {SET_FIELD} from '../../actions/BoardActionTypes';
import {connect} from 'react-redux';
import {Board} from '../../components/board/Board';
import {Players} from '../../components/players/Players';
import './game-board.css';

function GameBoard({board, currentPlayer, players}) {
  return (
      <div className='game-board-wrapper'>
        <div className='stats'>
          <h3>
            <label>Turn</label>
          </h3>
          <label>{currentPlayer.name}</label>
        </div>
        <div className='game-board'>
          <Board board={board}/>
        </div>
        <div className='players'>
          <h3>Players</h3>
          <Players players={players}/>
        </div>
      </div>
  );
}

const mapStateToProps = (state) => ({
  board: state.board, currentPlayer: state.currentPlayer, players: state.players,
});

const mapDispatchToProps = (dispatch) => ({
  setField: (x, y, player) => {
    dispatch({type: SET_FIELD, payload: {x, y, player}});
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
