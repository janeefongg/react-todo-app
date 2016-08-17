import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import { updateTask } from '../actions/index';

class TaskUpdate extends Component {
  constructor(props) {
    super(props);

    this.submitUpdate = this.submitUpdate.bind(this);
  }

  componentWillMount() {
    console.log('this is closemodal in task update', this.props.item)
  }


  submitUpdate(props, item) {
    this.props.update(props.fields.updated.value, this.props.item);
    this.props.closeModal();
  }

  render() {
    const { fields: { updated }, handleSubmit } = this.props;
    
    return (
      <form onSubmit={handleSubmit(() => this.submitUpdate(this.props))}>
        <div>
          <label>Update Task</label>
          <input type="text" placeholder="Enter update"
                 {...this.props.fields.updated} value={this.props.fields.updated.value || ''} />
        </div>
        <input type="submit"/>
      </form>
    )
  }
}

export default reduxForm({
  form: 'TaskUpdateForm',
  fields: ['updated']
}, null, { updateTask })(TaskUpdate);