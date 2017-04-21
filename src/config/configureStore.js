import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../reducers/rootReducer';
import createSagaMiddleware, {END} from 'redux-saga';

const configureStore = function configureStore(initialState) {
  const sagaMiddleWare = createSagaMiddleware();
  const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleWare));
  if (module.hot) {
    module.hot.accept('../reducers/rootReducer', () => {
      const nextReducer = rootReducer;
      store.replaceReducer(nextReducer);
    });
  }
  store.runSaga = sagaMiddleWare.run;
  store.close = () => store.dispatch(END);
  return store;
};

export default configureStore;