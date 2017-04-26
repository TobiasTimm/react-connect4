import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootSaga from './sagas/rootSagas';

import configureStore from './config/configureStore';
import {Provider} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import {Player} from './lib/Player';
import {Colors} from './lib/Color';

injectTapEventPlugin();

const players = [Player('Player 1', Colors.RED), Player('Player 2', Colors.YELLOW)];

const initialState = {
  players,
  currentPlayer: players[0],
};

const store = configureStore(initialState);
store.runSaga(rootSaga);

ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </Provider>,
    document.getElementById('root'),
);
