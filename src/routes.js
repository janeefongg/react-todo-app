import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import CategoryIndex from './containers/category_index';
import CategoryNew from './components/category_new';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={CategoryIndex} />
    <Route path="/new" component={CategoryNew} />
  </Route>
);