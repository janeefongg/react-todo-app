import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);

  }
  
  render() {
    return (
      <div>
        <h3>Task Keeper</h3>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

