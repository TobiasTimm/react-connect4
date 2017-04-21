import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootSaga from './sagas/sagas';

import configureStore from './config/configureStore';
import {Provider} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';

injectTapEventPlugin();

const initialState = {};

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
