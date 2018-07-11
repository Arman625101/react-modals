import React, { Component } from 'react';
import { cx, css } from 'emotion';
import '../assets/index.scss';

const holder = css`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  font-family: 'Roboto', sans-serif;

  position: absolute;
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
const body = css`
  align-self: flex-start;
  width: auto;
  margin: 0.5rem;
  background: #fff;
  padding: 1rem;
  position: relative;
  p {
    color: red;
  }
`;

const ModalZ = ({ size, text, children }) => (
  <div className={holder}>
    <div
      className={body}
      css={`
        @media (min-width: 992px) {
          width: ${size === 'large' ? '800px' : '300px'};
        }
        @media (min-width: 576px) {
          width: ${size === 'large' ? '500px' : '300px'};
          margin: 1.75rem auto;
        }
      `}
    >
      <p>{children || text}</p>
    </div>
  </div>
);

export default ModalZ;
