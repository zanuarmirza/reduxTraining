import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import reducer from './redux';
import rootSaga from './sagas';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const sagaMiddleware = createSagaMiddleware();
/* eslint-disable no-underscore-dangle */
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  reducer,
  compose(applyMiddleware(sagaMiddleware), reduxDevTools),
);
sagaMiddleware.run(rootSaga);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
