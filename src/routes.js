import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import TasksIndex from './components/tasks_index';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={TasksIndex} />
  </Route>
);