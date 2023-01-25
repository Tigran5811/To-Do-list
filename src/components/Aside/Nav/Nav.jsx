import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';
import { getActiveStyle } from './utils';

export class Nav extends Component {
  render() {
    return (
      <nav className={styles.nav}>
        <NavLink
          style={getActiveStyle}
          to="/"
        >
          Home

        </NavLink>
        <NavLink
          style={getActiveStyle}
          to="/counter"
        >
          Counter

        </NavLink>
        <NavLink
          style={getActiveStyle}
          to="/login"
        >
          Login

        </NavLink>
        <NavLink
          style={getActiveStyle}
          to="/register"
        >
          Register

        </NavLink>
      </nav>
    );
  }
}
