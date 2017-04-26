import {fork} from 'redux-saga/effects';
import {watchNextPlayer} from './currentPlayerSagas';
import {watchFieldsOnBoard, watchRestart} from './boardSagas';

function* root() {
  yield[fork(watchNextPlayer), fork(watchFieldsOnBoard), fork(watchRestart)];
}

export default root;