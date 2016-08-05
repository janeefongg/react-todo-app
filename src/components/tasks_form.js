import React, { Component } from 'react';

class TasksForm extends Component {
  render() {
    return (
      <form>
        <input type="text" name="taskName" placeholder="Name of task"/>
        <br />
        <input type="text" name="taskDetails" placeholder="Enter details"/>
        <br />
        <input type="submit"/>
      </form>
    )
  }
}

export default TasksForm;