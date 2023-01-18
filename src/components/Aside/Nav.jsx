import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.scss';

export class Nav extends Component {
  render() {
    return (
      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/counter">Counter</Link>
      </nav>
    );
  }
}
