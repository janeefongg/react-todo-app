import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCategories, fetchTasks, postCategory, deleteCategory } from '../actions/index';

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
    this.removeCategory = this.removeCategory.bind(this);
  }


  componentWillMount() {
    this.props.fetchCategories();
  }

  selectCategory(category) {
    this.setState({category: category});
    this.props.fetchTasks(category);
  }

  removeCategory(category) {
    console.log('inside remove category in component', category);
    this.props.deleteCategory(category);
  }

  render() {
    return (
      <div className="app-container">
        <div className="category-container">
          <CategoryList selectCategory={this.selectCategory} categories={this.props.categories} remove={this.removeCategory}/>
        </div>
        <div>
          <CategoryCurrent category={this.state.category} tasks={this.props.tasks} />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories.allCategories,
    tasks: state.tasks.allTasks
  }
}

export default connect(mapStateToProps, { fetchCategories, fetchTasks, postCategory, deleteCategory })(CategoryIndex);
