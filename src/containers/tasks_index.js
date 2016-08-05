import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchTasks } from '../actions/index';

class TasksIndex extends Component {
  componentWillMount() {
    console.log('time to call an action creator!')
    this.props.fetchTasks();
  }

  render() {
    return (
      <div>
        Tasks Index - Test Root Route Test
      </div>
    )
  }
}


export default connect(null, { fetchTasks })(TasksIndex);
