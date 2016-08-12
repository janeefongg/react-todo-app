import { combineReducers } from 'redux';
import CategoryReducer from './reducer_categories';
import TaskReducer from './reducer_tasks'

import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  categories: CategoryReducer,
  tasks: TaskReducer,
  form: formReducer
});

export default rootReducer;
