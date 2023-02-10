import classNames from 'classnames/bind';
import React from 'react';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

export const Button = ({
  text, type, onClick, disabled,
}) => (
  <button disabled={disabled} onClick={onClick} className={cx('button', { disabled })} type={type}>{text}</button>
);
