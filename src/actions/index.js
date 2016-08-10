import axios from 'axios';

export const FETCH_TASKS = 'FETCH_TASKS';
export const CREATE_TASK = 'POST_TASK';

const ROOT_URL = 'http://localhost:8000';

export function fetchTasks() {
  console.log('inside fetch')

  return function(dispatch) {
    axios.get(`${ROOT_URL}/api/tasks`)
      .then(function(response) {
        dispatch({ type: FETCH_TASKS, payload: response.data });
      })
  };
}

export function createTask(props) {
  const params = {
    name: props.fields.name.value,
    content: props.fields.content.value,
    due: props.fields.due.value
  };

  return function(dispatch) {
    axios.post(`${ROOT_URL}/api/tasks`, params)
      .then(function(response) {
        dispatch({ type: CREATE_TASK, payload: response.data });
      })
  }
}

