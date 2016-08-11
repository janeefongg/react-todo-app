import { FETCH_CATEGORIES, POST_TASK } from '../actions/index';

const INITIAL_STATE = { allCategories: [], tasks: [], task: null, category: null };

export default function (state = INITIAL_STATE, action) {
  console.log('this is action', action.payload);
  switch (action.type) {
    case FETCH_CATEGORIES:
      console.log('inside reducer');
      return { ...state, allCategories: action.payload };
    default:
      return state;
  }
}
