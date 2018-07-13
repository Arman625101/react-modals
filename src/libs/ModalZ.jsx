import React, { Component } from 'react';
import { cx, css } from 'emotion';
import '../assets/index.scss';

const body = css`
  align-self: flex-start;
  width: 100%;
  margin: 0.5rem;
  background: #fff;
  padding: 1rem;
  position: relative;
`;
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

const ModalZ = ({
  size, text, children, isOpen,
}) => {
  const isOpened = isOpen;
  const holder = css`
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    font-family: 'Roboto', sans-serif;

    position: absolute;
    opacity: ${isOpened ? '1' : '0'};
    visibility: ${isOpened ? 'visible' : 'hidden'};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 1em;
    background-color: rgba(0, 0, 0, 0.85);
    line-height: 1;
    display: flex;
    justify-content: center;
    user-select: none;
    z-index: 1000;
    transition: background-color 0.5s linear;
  `;
  const opened = {
    opacity: 1,
    visibility: 'visible',
  };
  const closed = {
    opacity: 0,
    visibility: 'hidden',
  };

  const clicked = () => (e) => {
    // console.log('Clicked');
  };
  const modalZHolder = document.getElementById('modalZHolder');
  const modalZ = document.getElementById('modalZ');
  if (modalZHolder) {
    modalZHolder.addEventListener('click', (e) => {
      if (e.target.id === 'modalZHolder') {
        console.log(modalZHolder.classList);
        modalZHolder.classList.remove('opened');
      }
    });
  }

  return (
    <div id="modalZHolder" className={`${holder}`} style={isOpened ? opened : closed}>
      <div
        id="modalZ"
        className={cx(body)}
        onClick={clicked()}
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
};

export default ModalZ;
