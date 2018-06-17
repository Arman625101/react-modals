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
        {this.state.isOpen && <ModalZ>Hello ModalZ</ModalZ>}
      </div>
    );
  }
}

export default Demo;
