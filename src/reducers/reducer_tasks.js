import { FETCH_TASKS, CREATE_TASK } from '../actions/index';

const INITIAL_STATE = { all: [], task: null };

export default function (state = INITIAL_STATE, action) {
  console.log('this is action', action.payload);
  switch (action.type) {
    case FETCH_TASKS:
      console.log('inside fetch task');
      return { ...state, all: action.payload };
    default:
      return state;
  }
}
