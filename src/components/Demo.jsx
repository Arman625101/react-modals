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
        <h1>Demo ModalZ</h1>
        <button onClick={this.handleClick}>Open Modal</button>
        <ModalZ isOpen={this.state.isOpen} size="medium">
          <h1>Modal</h1>
        </ModalZ>
      </div>
    );
  }
}

export default Demo;
