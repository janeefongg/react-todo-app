import React, { Component } from 'react';
import Scissors from 'react-icons/lib/ti/scissors';
import Modal from 'react-modal';

import TaskUpdate from './task_update';

export default class TaskEntry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    console.log('this is props.update', this.props.update)
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  // afterOpenModal() {
  //   this.refs.subtitle.style.color = "000";
  // }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (

      <div>
        <label>
          <input type="checkbox" onChange={() => (this.props.remove(this.props.item))}/>{this.props.item}
        </label>
        <Scissors onClick={() => this.openModal() }/>
        <Modal
          isOpen={this.state.modalIsOpen}

          onRequestClose={this.closeModal}
        >
          <button onClick={this.closeModal}>close</button>
          <TaskUpdate update={this.props.update} closeModal={this.closeModal} item={this.props.item}/>
        </Modal>
      </div>
      )
  }

}

// const TaskEntry = ({item, remove, update}) => (
//
// )
//
// export default TaskEntry;