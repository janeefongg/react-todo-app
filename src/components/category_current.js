import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskList from './task_list';
import { postTask, fetchTasks } from '../actions/index';

export default class CategoryCurrent extends Component {
  constructor(props) {
    super(props);

    this.postTask = this.postTask.bind(this);
  }

  postTask(props) {
    this.props.postTask(this.props.category, props.fields.task.value);
    this.props.fetchTasks(this.props.category);
    this.context.router.push('/');
  }

  render() {
    return (
      <div>
        <TaskList post={this.postTask} items={this.props.tasks}/>
      </div>
    )
  }
}


export default connect(null, { postTask, fetchTasks })(CategoryCurrent);