import React, { Component } from 'react';
import Nav from './nav';

export default class App extends Component {
  render() {
    return (
      <div>
        Tasks
        <Nav />
        {this.props.children}
        <br />
        {window.location.href}
      </div>
    );
  }
}

