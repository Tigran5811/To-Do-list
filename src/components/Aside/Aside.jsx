import classNames from 'classnames/bind';
import React from 'react';
import styles from './Aside.module.scss';
import { Nav } from './Nav/Nav';

const cx = classNames.bind(styles);

export const Aside = ({ isOpenAside }) => (
  <aside className={cx('aside', { open: isOpenAside })}>
    <Nav />
  </aside>
);
