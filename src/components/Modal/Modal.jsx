import classNames from 'classnames/bind';
import React, { Component } from 'react';
import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

export class Modal extends Component {
  render() {
    const { isOpenModal, children } = this.props;
    return (
      <div className={
        cx(
          'modal',
          {
            open: isOpenModal,

          },
        )
      }
      >
        {children}

      </div>
    );
  }
}