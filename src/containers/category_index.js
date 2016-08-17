import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCategories, fetchTasks } from '../actions/index';

import CategoryList from '../components/category_list';
import CategoryCurrent from '../components/category_current';

class CategoryIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: this.props.tasks,
      category: null
    }

    this.selectCategory = this.selectCategory.bind(this);
  }


  componentWillMount() {
    console.log('time to call an action creator!')
    this.props.fetchCategories();
  }

  componentWillReceiveProps() {
    this.props.fetchCategories();
  }

  selectCategory(category) {
    console.log('this is category', category);
    this.setState({category: category});
    this.props.fetchTasks(category);
    // this.setState({current: category});
  }


  render() {
    console.log('this is state tasks', this.state.current)
    return (
      <div className="basic-container">
        <div className="category-container">
          <CategoryList selectCategory={this.selectCategory} categories={this.props.categories} />
        </div>
        <div>
          <CategoryCurrent category={this.state.category} tasks={this.props.tasks} />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('this is staet inside category index', state);
  return {
    categories: state.categories.allCategories,
    tasks: state.tasks.allTasks
  }
}

export default connect(mapStateToProps, { fetchCategories, fetchTasks })(CategoryIndex);
