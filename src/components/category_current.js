import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import TaskList from './task_list';
import { postTask, fetchTasks } from '../actions/index';

export class CategoryCurrent extends Component {
  constructor(props) {
    super(props);

    this.postTask = this.postTask.bind(this);
  }

  componentWillReceiveProps() {
    this.props.fetchTasks();
  }


  postTask(props) {
    console.log('posting task in component', this.props.category)
    this.props.postTask(this.props.category, props.fields.task.value);
  }

  render() {
    if (!this.props.tasks) {

      const { fields: { task }, handleSubmit } = this.props;

      return (
        <div>
          <form onSubmit={handleSubmit(() => this.postTask(this.props))}>
            <input type="text" placeholder="Add Task"  {...this.props.fields.task}
                   value={this.props.fields.task.value || ''}/>
          </form>
        </div>
      )
    } else {

      const taskArr = this.props.tasks.map((task, index)=> {
        if (task === '') {
          return;
        }
        return <TaskList key={index} item={task}/>
      });

      const { fields: { task }, handleSubmit } = this.props;

      return (
        <div className="task-container">
          <div>
            <form onSubmit={handleSubmit(() => this.postTask(this.props))}>
              <input type="text" placeholder="Add Task"  {...this.props.fields.task}
                     value={this.props.fields.task.value || ''}/>
            </form>
            {taskArr}
          </div>
        </div>
      )
    }
  }
}

export default reduxForm({
  form: 'CategoryNewForm',
  fields: ['task']
}, null, { postTask, fetchTasks })(CategoryCurrent);