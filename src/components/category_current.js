import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { reduxForm } from 'redux-form';

import TaskList from './task_list';
import { postTask, fetchTasks } from '../actions/index';

export default class CategoryCurrent extends Component {
  constructor(props) {
    super(props);

    this.postTask = this.postTask.bind(this);
  }

  componentWillMount() {
    console.log('cateogrycurrent props', this.props);
  }

  postTask(props) {
    this.props.postTask(this.props.category, props.fields.task.value);
    this.props.fetchTasks(this.props.category);
    this.context.router.push('/');
  }

  // render() {
  //   if (!this.props.tasks) {
  //
  //     const { fields: { task }, handleSubmit } = this.props;
  //
  //     return (
  //       <div>
  //         <form onSubmit={handleSubmit(() => this.postTask(this.props))}>
  //           <input type="type" placeholder="Add Task"  {...this.props.fields.task}
  //                  value={this.props.fields.task.value || ''}/>
  //         </form>
  //       </div>
  //     )
  //   } else {
  //
  //     const taskArr = this.props.tasks.map((task, index)=> {
  //       if (task === '') {
  //         return;
  //       }
  //       return <TaskList key={index} item={task}/>
  //     });
  //
  //     const { fields: { task }, handleSubmit } = this.props;
  //
  //     return (
  //       <div className="task-container">
  //         <div>
  //           <form onSubmit={handleSubmit(() => this.postTask(this.props))}>
  //             <input type="text" placeholder="Add Task"  {...this.props.fields.task}
  //                    value={this.props.fields.task.value || ''}/>
  //           </form>
  //           {taskArr}
  //         </div>
  //       </div>
  //     )
  //   }
  // }
  render() {
    return (
      <div>
        <TaskList post={this.postTask} items={this.props.tasks}/>
      </div>
    )
  }
}


// export default reduxForm({
//   form: 'CategoryNewForm',
//   fields: ['task']
// }, null, { postTask, fetchTasks })(CategoryCurrent);

export default connect(null, { postTask, fetchTasks })(CategoryCurrent);