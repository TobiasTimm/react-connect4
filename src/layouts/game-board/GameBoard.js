import React from 'react';
import {connect} from 'react-redux';
import {Board} from '../../components/board/Board';
import {Players} from '../../components/players/Players';
import './game-board.css';
import {setFieldOnBoard} from '../../actions/BoardActions';

function GameBoard({board, currentPlayer, players, setFieldOnBoard}) {
  return (
      <div className='game-board-wrapper'>
        <div className='stats'>
          <h3>
            <label>Turn</label>
          </h3>
          <label>{currentPlayer.name}</label>
        </div>
        <div className='game-board'>
          <Board board={board} onFieldClick={setFieldOnBoard}/>
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
  setFieldOnBoard: (x, y) => {
    dispatch(setFieldOnBoard(x, y));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
