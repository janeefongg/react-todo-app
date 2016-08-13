import React from 'react';

const TaskEntry = ({item}) => (
  <form>
    <input type="checkbox"/>{item}
  </form>
)

export default TaskEntry;