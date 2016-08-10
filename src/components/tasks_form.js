import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import { createTask } from '../actions/index';

class TasksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1
    };
  }

  postTask(props) {
    console.log('inside postTask', props);
    this.props.createTask(props);
  }

  render() {
    const { fields: { name, content, due }, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(() => this.postTask(this.props))}>
        <h3>Create A New Task</h3>
        <div>
          <label>Name</label><br />
          <input type="text" placeholder="Name of task" {...name} />
        </div>
        <div>
          <label>Details</label><br />
          <textarea placeholder="Enter details" {...content} />
        </div>
        <div>
          <label>Due</label><br />
          <input type="date" placeholder="Enter details" {...due} />
        </div>
        <input type="submit" />
      </form>
    );
  }
}


function mapStateToProps() {
  return {
    initialValue: {
      name: '',
      content: '',
      due: '',
    },
  };
}


export default reduxForm({
  form: 'TasksNewForm',
  fields: ['name', 'content', 'due'],
}, null, { createTask })(TasksForm);
