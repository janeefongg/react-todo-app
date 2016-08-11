import { combineReducers } from 'redux';
import CategoryReducer from './reducer_tasks';

import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  categories: CategoryReducer,
  form: formReducer,
});

export default rootReducer;
