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
    this.modal = React.createRef();
  }

  componentDidMount() {
    this.modal.current.classList.add('closed');
  }

  componentDidUpdate() {
    const elem = document.createElement('div');
    elem.setAttribute('id', 'modalZHolder');
    document.body.appendChild(elem);
    if (this.props.isOpen) {
      this.modal.current.classList.remove('closed');
      this.modal.current.classList.add('opened');
    } else {
      this.modal.current.classList.remove('opened');
      this.modal.current.classList.add('closed');
    }
  }

  closeModal = () => (e) => {
    if (e.target.id === 'modalZHolder') {
      this.modal.current.classList.remove('opened');
      this.modal.current.classList.add('closed');
    }
  };

  render() {
    const {
      size, text, children, isOpen,
    } = this.props;
    return (
      <div onClick={this.closeModal()} ref={this.modal} id="modalZHolder" className="holder">
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
          {children || text}
        </div>
      </div>
    );
  }
}

export default ModalZ;
