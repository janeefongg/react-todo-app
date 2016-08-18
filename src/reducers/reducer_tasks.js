import { FETCH_TASKS, POST_TASK } from '../actions/index';

const INITIAL_STATE = { allTasks: [] };

export default function (state = INITIAL_STATE, action) {
  console.log('this is action', action.payload);
  switch (action.type) {
    case FETCH_TASKS:
      console.log('inside reducer');
      return { ...state, allTasks: action.payload };
    default:
      return state;
  }
}
