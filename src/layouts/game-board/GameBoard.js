import React from 'react';
import {connect} from 'react-redux';
import {Board} from '../../components/board/Board';
import {Players} from '../../components/players/Players';
import './game-board.css';
import {resetBoard, setFieldOnBoard} from '../../actions/BoardActions';
import {Overview} from '../../components/overview/Overview';

function GameBoard({board, currentPlayer, players, setFieldOnBoard, restartGame, rules}) {
  return (
      <div className='game-board-wrapper'>
        <div className='overview-wrapper'>
          <Overview currentPlayer={currentPlayer} restartGame={restartGame} rules={rules}/>
        </div>
        <div className='board-wrapper'>
          <Board board={board} onFieldClick={setFieldOnBoard}/>
        </div>
        <div className='players-wrapper'>
          <Players players={players}/>
        </div>
      </div>
  );
}

const mapStateToProps = (state) => ({
  board: state.board,
  currentPlayer: state.currentPlayer,
  players: state.players,
  rules: state.rules,
});

const mapDispatchToProps = (dispatch) => ({
  setFieldOnBoard: (x, y) => {
    dispatch(setFieldOnBoard(x, y));
  },
  restartGame: () => {
    dispatch(resetBoard());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
