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
    <div className="task-container">{taskArr}</div>
  )
};

export default CategoryCurrent;