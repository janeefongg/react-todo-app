import { FETCH_CATEGORIES, POST_CATEGORY } from '../actions/index';

const INITIAL_STATE = { allCategories: [] };

export default function (state = INITIAL_STATE, action) {
  console.log('this is action', action.payload);
  switch (action.type) {
    case FETCH_CATEGORIES:
      console.log('inside reducer');
      return { ...state, allCategories: action.payload };
    case POST_CATEGORY:
      return { ...state, allCategories: action.payload };
    default:
      return state;
  }
}
