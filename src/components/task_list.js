import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { postTask, fetchTasks } from '../actions/index';
import TaskEntry from './task_entry';

export default class TaskList extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    console.log('this.props.items on load', this.props.item);

    if (this.props.items.length === 1) {

      const { fields: { task }, handleSubmit } = this.props;

      return (
        <div className="task-container">
          <form onSubmit={handleSubmit(() => this.props.post(this.props))}>
            <input type="text" placeholder="Add Task"  {...this.props.fields.task}
                   value={this.props.fields.task.value || ''}/>
          </form>
          No current tasks
        </div>
      )
    } else if (!this.props.items.length) {
      console.log('no category selected');
      return (
        <div className="task-container">
          Select a category to get started.
        </div>
      )
    } else {

      const taskArr = this.props.items.map((item, index)=> {
        if (item === '') {
          return;
        }
        return <TaskEntry update={this.props.update} remove={this.props.delete} key={index} item={item}/>
      });

      const { fields: { task }, handleSubmit } = this.props;

      return (
        <div className="task-container">
          <div>
            <form onSubmit={handleSubmit(() => this.props.post(this.props))}>
              <input type="text" placeholder="Add Task"  {...this.props.fields.task}
                     value={this.props.fields.task.value || ''}/>
              {taskArr}
            </form>

          </div>
        </div>
      )
    }
  }
}

export default reduxForm({
  form: 'CategoryNewForm',
  fields: ['task']
}, null, { postTask, fetchTasks })(TaskList);

