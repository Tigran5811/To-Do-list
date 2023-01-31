import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './404.module.scss';

export class NotFound404 extends React.Component {
  render() {
    return (
      <div className={styles.box}>
        <h1>Page Not Found</h1>
        <NavLink to="/">Home</NavLink>
      </div>
    );
  }
}
