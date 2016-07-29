import axios from 'axios';

export const FETCH_TASKS = 'FETCH_TASKS';

export function fetchTasks() {
  const request = axios.get('/');
  return {
    type: FETCH_TASKS,
    payload: request,
  };
}
