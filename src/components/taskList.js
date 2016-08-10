import React from 'react';

import TaskEntry from './taskEntry';

const TaskList = ({tasks}) => {
  console.log('this is task', tasks);
  const tasksArr = tasks.map((task, index) => {
    return <TaskEntry key={index} item={task} />
  });

  console.log(tasksArr);

  return (
    <div>
      {tasksArr}
    </div>
  )
}


export default TaskList;