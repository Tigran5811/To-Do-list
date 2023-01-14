import classNames from 'classnames/bind';
import React, { Component } from 'react';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

export class Button extends Component {
  render() {
    const { text, type, onClick } = this.props;

    return (
      <button onClick={onClick} className={cx('button')} type={type}>{text}</button>
    );
  }
}
