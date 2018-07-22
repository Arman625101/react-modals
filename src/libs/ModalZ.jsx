import React, { Component } from 'react';
import { cx, css } from 'emotion';
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
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal = () => (e) => {
    const modal = document.getElementById('modalZHolder');
    modal.classList.remove('opened');
    modal.classList.add('closed');
  };

  render() {
    const {
      size, text, children, isOpen,
    } = this.props;

    return (
      <div
        onClick={this.closeModal()}
        id="modalZHolder"
        className={`holder ${isOpen ? 'opened' : 'closed'}`}
      >
        <div
          id="modalZ"
          className="body"
          role="presentation"
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
          {children || text}
        </div>
      </div>
    );
  }
}

export default ModalZ;
