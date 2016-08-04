import React, { Component } from 'react';
import { Link } from 'react-router';

// import TasksIndex from './tasks_index';

// const App = () => (
//   <div>
//     React To-Do App
//     {this.props.children}
//   </div>
// );

export default class App extends Component {
  render() {
    return (
      <div>
        Tasks
        {this.props.children}
        {window.location.href}
      </div>
    );
  }
}


// export default App;
