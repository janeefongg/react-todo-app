import React, { Component, PropTypes } from 'react';
import Modal from 'react-modal';

import Nav from './nav';
import CategoryForm from './category_form';

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

  static contextTypes = {
    router: PropTypes.object
  };

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    this.refs.subtitle.style.color = "000";
  }

  closeModal() {
    this.setState({modalIsOpen: false});
    this.context.refresh;
  }

  render() {
    return (
      <div>
        Tasks
        <Nav />

        <div>
          <button onClick={this.openModal}>Open Modal</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            >
            <button onClick={this.closeModal}>close</button>
            <CategoryForm closeModal={this.closeModal} />
          </Modal>
        </div>
        {this.props.children}
        <br />
      </div>
    );
  }
}

