import React, { Component, Fragment } from 'react';
import { cx, css } from 'emotion';
import ReactDOM from 'react-dom';
import '../assets/index.scss';

const setSize = (size) => {
  switch (size) {
    case 'large':
      return '900px';
    case 'medium':
      return '600px';
    case 'small':
      return '300px';
    default:
      return '600px';
  }
};

class ModalZ extends Component {
  componentWillMount() {
    this.el = document.createElement('div');
    this.el.setAttribute('id', 'modalZPortal');
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render() {
    const {
      size, text, children, isOpen, onClose,
    } = this.props;
    return ReactDOM.createPortal(
      <div ref={this.modal} className="holder">
        <div
          id="modalZ"
          className="body"
          css={`
            @media (min-width: 992px) {
              width: ${setSize(size)};
            }
            @media (min-width: 576px) {
              width: ${setSize(size)};
              margin: 1.75rem auto;
            }
          `}
        >
          <button className="close" onClick={onClose}>
            Close
          </button>
          {children || text}
        </div>
      </div>,
      this.el,
    );
  }
}

export default ModalZ;
