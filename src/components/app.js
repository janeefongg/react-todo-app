import React, { Component } from 'react';
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
        Tasks
        <Nav />
        {this.props.children}
        <br />
        <div>
          <button onClick={this.openModal}>Open Modal</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            >

            <h2 ref="subtitle">Hello</h2>
            <button onClick={this.closeModal}>close</button>
            <CategoryForm />
          </Modal>
        </div>
      </div>
    );
  }
}

