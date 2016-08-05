import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTasks }, dispatch);
}

export default connect(null, mapDispatchToProps)(TasksIndex);
