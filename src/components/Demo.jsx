import React, { Component } from 'react';
import ModalZ from '../libs/ModalZ';

class Demo extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal = () => {
    this.setState(state => ({ isOpen: !state.isOpen }));
  };
  render() {
    return (
      <div>
        <button className="toggle-modal" onClick={this.toggleModal}>
          Open Modal
        </button>
        {this.state.isOpen && (
          <ModalZ onClose={this.toggleModal} size="large">
            <h1>Modal</h1>
          </ModalZ>
        )}
      </div>
    );
  }
}

export default Demo;
