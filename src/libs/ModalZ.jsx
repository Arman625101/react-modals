import React, { Component, Fragment } from 'react';
import { cx, css } from 'emotion';
import '../assets/index.scss';
import ModalZPortal from './ModalZPortal';

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
    // this.modal.current.classList.add('closed');
  }

  componentDidUpdate() {
    // if (this.props.isOpen) {
    //   this.modal.current.classList.remove('closed');
    //   this.modal.current.classList.add('opened');
    // } else {
    //   this.modal.current.classList.remove('opened');
    //   this.modal.current.classList.add('closed');
    // }
  }

  closeModal = () => (e) => {
    console.log('A');
    if (e.target.id === 'modalZHolder') {
    }
  };

  render() {
    const {
      size, text, children, isOpen,
    } = this.props;
    return (
      <Fragment>
        {isOpen && (
          <ModalZPortal onClose={this.closeModal()}>
            <div ref={this.modal} id="modalZHolder" className="holder">
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
          </ModalZPortal>
        )}
      </Fragment>
    );
  }
}

export default ModalZ;
