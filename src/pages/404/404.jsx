import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './404.module.scss';

export const NotFound404 = () => (
  <div className={styles.box}>
    <h1>Page Not Found</h1>
    <NavLink to="/">Home</NavLink>
  </div>
);
