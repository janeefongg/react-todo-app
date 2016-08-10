import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

import { createTask } from '../actions/index';

class TasksForm extends Component {
  constructor(props) {
    super(props);

  }

  static contextTypes = {
    router: PropTypes.object
  };

  postTask(props) {
    console.log('inside postTask', props);
    this.props.createTask(props)
    this.context.router.push('/');

  }

  render() {
    const { fields: { name, content, due }, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(() => this.postTask(this.props))}>
        <h3>Create A New Task</h3>
        <div>
          <label>Name</label><br />
          <input type="text" placeholder="Name of task" {...this.props.fields.name} value={this.props.fields.name.value || ''} />
        </div>
        <div>
          <label>Details</label><br />
          <textarea placeholder="Enter details" {...this.props.fields.content} value={this.props.fields.content.value || ''} />
        </div>
        <div>
          <label>Due</label><br />
          <input type="date" placeholder="Enter details" {...this.props.fields.due} value={this.props.fields.due.value || ''}/>
        </div>
        <input type="submit" />
      </form>
    );
  }
}


// function mapStateToProps() {
//   return {
//     initialValue: {
//       name: '',
//       id: '',
//       content: '',
//       due: ''
//     }
//   };
// };


export default reduxForm({
  form: 'TasksNewForm',
  fields: ['name', 'content', 'due']
}, null, { createTask })(TasksForm);
