import React from 'react';

const TaskEntry = ({item, remove}) => (
  <div>
    <label>
      <input type="checkbox" onChange={() => (remove(item))}/>{item}
    </label>
  </div>
)

export default TaskEntry;