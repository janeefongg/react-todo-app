import React from 'react';

import TaskList from './task_list';

const CategoryCurrent = ({tasks}) => {

  const taskArr = tasks.map((task, index)=> {
    if (task === '') {
      return;
    }
   return <TaskList key={index} item={task} />
  })
  return (
    <div className="task-container">
      <div>
        <input type="text" placeholder="Add Task" />
        {taskArr}
      </div>
    </div>
  )
};

export default CategoryCurrent;