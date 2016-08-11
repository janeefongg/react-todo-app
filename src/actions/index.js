import axios from 'axios';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const POST_CATEGORY = 'POST_CATEGORIES';

const ROOT_URL = 'http://localhost:8000';

export function fetchCategories() {
  console.log('inside fetch')

  return function(dispatch) {
    axios.get(`${ROOT_URL}/api/categories`)
      .then(function(response) {
        console.log('this is response in actions fetch', response);
        dispatch({ type: FETCH_CATEGORIES, payload: response.data });
      })
  };
}

export function postCategory(props) {
  const params = {
    category: props.fields.category.value,
  };

  return function(dispatch) {
    axios.post(`${ROOT_URL}/api/categories`, params)
      .then(function(response) {
        dispatch({ type: POST_CATEGORY, payload: response.data });
      })
  }
}

