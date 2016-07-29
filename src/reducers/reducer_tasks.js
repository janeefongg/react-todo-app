import { FETCH_TASKS } from '../actions/index';

const INITIAL_STATE = { all: [], task: null };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_TASKS:
      return { ...state, task: action.payload.data };
    default:
      return state;
  }
}
