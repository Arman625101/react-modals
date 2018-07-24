import React, { Component } from 'react';
import ModalZ from '../libs/ModalZ';

class Demo extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <div>
        <button className="toggle-modal" onClick={this.handleClick}>Open Modal</button>
        <ModalZ isOpen={this.state.isOpen} size="large">
          <h1>Modal</h1>
        </ModalZ>
      </div>
    );
  }
}

export default Demo;
