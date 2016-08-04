import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Route, IndexRoute, Router, hashHistory } from 'react-router';
import route from './routes';
import promise from 'redux-promise';

import reducers from './reducers';

import App from './components/app';
import TasksIndex from './components/tasks_index';
import TasksNew from './components/tasks_new';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
// const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={hashHistory} routes={route}>
    </Router>
  </Provider>
  , document.querySelector('.container'));