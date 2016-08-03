import React from 'react';
import { Link } from 'react-router';

const TasksIndex = () => (
  <div>
    Tasks Index - Test Root Route
    <br />
    <Link to="/new">Insert New Task</Link>
  </div>
);

export default TasksIndex;
