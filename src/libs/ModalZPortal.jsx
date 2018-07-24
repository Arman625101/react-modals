import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ModalZPortal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.el.setAttribute('id', 'modalZPortal');
  }

  componentDidMount() {
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  onClose = () => {
    console.log(this.el);
  };

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default ModalZPortal;
