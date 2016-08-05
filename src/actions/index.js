import axios from 'axios';

export const FETCH_TASKS = 'FETCH_TASKS';

const ROOT_URL = 'http://localhost:8000';

export function fetchTasks() {
  const request = axios.get(`${ROOT_URL}/api/tasks`);
  return {
    type: FETCH_TASKS,
    payload: request,
  };
}
