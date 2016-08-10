import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchTasks } from '../actions/index';

import TaskList from '../components/taskList';

class TasksIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    }
  }

  componentWillMount() {
    console.log('time to call an action creator!')
    console.log(this.props.fetchTasks());
  }

  render() {
    return (
      <div>
        Tasks Index - Test Root Route Test
        <TaskList tasks={this.props.tasks} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('this is state', state.tasks.all);
  return {
    tasks: state.tasks.all
  }
}

export default connect(mapStateToProps, { fetchTasks })(TasksIndex);
