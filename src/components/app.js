import React, { Component, PropTypes } from 'react';
import Modal from 'react-modal';

import CategoryForm from './category_form';
import CategoryIndex from '../containers/category_index';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    }

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    this.refs.subtitle.style.color = "000";
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <h3>Task Keeper</h3>
        {/*<div>*/}
          {/*<button onClick={this.openModal}>Create Category</button>*/}
          {/*<Modal*/}
            {/*isOpen={this.state.modalIsOpen}*/}
            {/*onAfterOpen={this.afterOpenModal}*/}
            {/*onRequestClose={this.closeModal}*/}
            {/*>*/}
            {/*<button onClick={this.closeModal}>close</button>*/}
            {/*<CategoryForm closeModal={this.closeModal} />*/}
          {/*</Modal>*/}
        {/*</div>*/}
        <div>
        {this.props.children}
        </div>
      </div>
    );
  }
}

