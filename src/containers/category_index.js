import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCategories } from '../actions/index';

import CategoryList from '../components/category_list';
import CategoryCurrent from '../components/category_current';

class CategoryIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: []
    }

    this.selectCategory = this.selectCategory.bind(this);
  }


  componentWillMount() {
    console.log('time to call an action creator!')
    console.log(this.props.fetchCategories)
    this.props.fetchCategories();
  }

  componentWillReceiveProps() {
    this.props.fetchCategories();
  }

  selectCategory(category) {
    console.log('this is category', category);
    // this.setState({current: category});
  }


  render() {
    console.log('this is props categories', this.props.categories)
    return (
      <div>
        <div className="category-container">
          <CategoryList selectCategory={this.selectCategory} categories={this.props.categories} />
        </div>
        <div>
          <CategoryCurrent current={this.state.current} />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories.allCategories
  }
}

export default connect(mapStateToProps, { fetchCategories })(CategoryIndex);
