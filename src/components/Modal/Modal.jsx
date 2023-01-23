import classNames from 'classnames/bind';
import React, { Component } from 'react';
import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

export class Modal extends Component {
  render() {
    const { children, onClick } = this.props;
    return (
      <div onClick={onClick} role="button" className={cx('modal')}>
        {children}

      </div>
    );
  }
}
