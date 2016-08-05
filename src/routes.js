import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import TasksIndex from './containers/tasks_index';
import TasksNew from './components/tasks_new';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={TasksIndex} />
    <Route path="/new" component={TasksNew} />
  </Route>
);