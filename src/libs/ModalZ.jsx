import React, { Component } from 'react';
import { css } from 'emotion';
import '../assets/index.scss';

const className = css`
  position: fixed;
`;

const ModalZ = ({ text, children }) => <div className={className}>{children || text}</div>;

export default ModalZ;
