import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

import { postCategory } from '../actions/index';

class CategoryForm extends Component {
  constructor(props) {
    super(props);

  }

  static contextTypes = {
    router: PropTypes.object
  };

  postCategory(props) {
    console.log('this is props', props)
    this.props.postCategory(props);
    console.log(this.context.router);
    this.context.router.push('/');
    this.props.closeModal();

  }

  render() {
    const { fields: { category }, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(() => this.postCategory(this.props))}>
        <h3>Create A New Category</h3>
        <div>
          <label>Category</label><br />
          <input type="text" placeholder="Name of Category" {...this.props.fields.category} value={this.props.fields.category.value || ''} />
        </div>
        <input type="submit" />
      </form>
    );
  }
}


// function mapStateToProps() {
//   return {
//     initialValue: {
//       name: '',
//       id: '',
//       content: '',
//       due: ''
//     }
//   };
// };


export default reduxForm({
  form: 'CategoryNewForm',
  fields: ['category']
}, null, { postCategory })(CategoryForm);