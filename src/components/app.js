import React, { Component, PropTypes } from 'react';

import CategoryForm from './category_form';
import CategoryIndex from '../containers/category_index';

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

