import React from 'react';

const TaskEntry = ({item}) => {

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.content}</p>
      <p>Due: {item.due}</p>
    </div>
  )
}



export default TaskEntry;