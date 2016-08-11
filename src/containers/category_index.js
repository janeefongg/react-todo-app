import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCategories } from '../actions/index';

import CategoryList from '../components/category_list';

class CategoryIndex extends Component {

  componentWillMount() {
    console.log('time to call an action creator!')
    console.log(this.props.fetchCategories)
    this.props.fetchCategories();
  }

  render() {
    console.log('this is props categories', this.props.categories)
    return (
      <div>
        Tasks Index - Test Root Route Test
        <CategoryList categories={this.props.categories} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  // console.log('this is state', state.tasks.all);
  return {
    categories: state.categories.allCategories
  }
}

export default connect(mapStateToProps, { fetchCategories })(CategoryIndex);
