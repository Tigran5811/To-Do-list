import classNames from 'classnames/bind';
import React, { Component } from 'react';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

export class Button extends Component {
  render() {
    const {
      text, type, onClick, disabled,
    } = this.props;

    return (
      <button disabled={disabled} onClick={onClick} className={cx('button', { disabled })} type={type}>{text}</button>
    );
  }
}
