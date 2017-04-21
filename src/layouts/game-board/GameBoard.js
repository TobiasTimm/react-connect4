import React from 'react';
import {SET_FIELD} from '../../actions/BoardActionTypes';
import {connect} from 'react-redux';
import {Board} from '../../components/board/Board';

function GameBoard({board, currentPlayer}) {
  return (
      <div>
        <h3>Turn: {currentPlayer.name}</h3>
        <Board board={board}/>
      </div>
  );
}

const mapStateToProps = (state) => ({
  board: state.board, currentPlayer: state.currentPlayer,
});

const mapDispatchToProps = (dispatch) => ({
  setField: (x, y, player) => {
    dispatch({type: SET_FIELD, payload: {x, y, player}});
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
