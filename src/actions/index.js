import axios from 'axios';

export const FETCH_TASKS = 'FETCH_TASKS';
export const CREATE_TASK = 'POST_TASK';

const ROOT_URL = 'http://localhost:8000';

export function fetchTasks() {
  const request = axios.get(`${ROOT_URL}/api/tasks`);
  return {
    type: FETCH_TASKS,
    payload: request
  };
};

export function createTask(props) {
  console.log('inside', props)
  const request = axios.post(`${ROOT_URL}/api/tasks`, props);
  return {
    type: CREATE_TASK,
    payload: request
  };
};

