import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskList from './task_list';
import { postTask, fetchTasks, deleteTask, updateTask } from '../actions/index';



export default class CategoryCurrent extends Component {
  constructor(props) {
    super(props);

    this.postTask = this.postTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
  }

  postTask(props) {
    this.props.postTask(this.props.category, props.fields.task.value);
    this.props.fetchTasks(this.props.category);
  }

  deleteTask(props) {
    this.props.deleteTask(this.props.category, props);
    this.props.fetchTasks(this.props.category);
  }

  updateTask(update, item) {
    console.log('inside update task in catexgory current', this.props.category);
    //category, task, update
    this.props.updateTask(this.props.category, update, item);
    this.props.fetchTasks(this.props.category);
  }

  render() {
    return (
      <div>
        <TaskList update={this.updateTask} delete={this.deleteTask} post={this.postTask} items={this.props.tasks}/>
      </div>
    )
  }
}


export default connect(null, { postTask, fetchTasks, deleteTask, updateTask })(CategoryCurrent);