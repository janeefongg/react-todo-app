import React, { Component } from 'react';
import TasksIndex from './tasks_index';

export default class App extends Component {
  										render() {
    										return (
      <div>
        React To-Do App
        <TasksIndex />
      </div>
    );
  }
}
