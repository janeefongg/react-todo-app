import axios from 'axios';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const POST_CATEGORY = 'POST_CATEGORIES';
export const FETCH_TASKS = 'FETCH_TASKS';
export const POST_TASK = 'POST_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';

const ROOT_URL = 'http://localhost:8000';

export function fetchCategories() {

  return function(dispatch) {
    axios.get(`${ROOT_URL}/api/categories`)
      .then(function(response) {
        dispatch({ type: FETCH_CATEGORIES, payload: response.data });
      })
  };
};

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
};

export function fetchTasks(category) {
  const params = {
    category: category
  };

  const config = {
    params: params
  };

  console.log('category inside fetchTasks', category)
  return function(dispatch) {
    axios.get(`${ROOT_URL}/api/tasks`, config)
      .then(function(response) {
        dispatch({ type: FETCH_TASKS, payload: response.data });
      })
  }
};

export function postTask(category, task) {
  const params = {
    category: category,
    task: task
  };

  return function(dispatch) {
    axios.post(`${ROOT_URL}/api/tasks`, params)
      .then(function(response) {
        dispatch({ type: POST_TASK, payload: response.data });
      })
  }
};

export function deleteTask(category, task) {
  const params = {
    category: category,
    task: task
  };

  const config = {
    params: params
  };

  return function(dispatch) {
    axios.delete(`${ROOT_URL}/api/tasks`, config)
      .then(function(response) {
        dispatch({ type: DELETE_TASK, payload: response.data });
      })
  }
};

export function updateTask(category, task, update) {
  console.log('inside update task');
  // return function(dispatch) {
  //   axios.put('/')
  // }
};


