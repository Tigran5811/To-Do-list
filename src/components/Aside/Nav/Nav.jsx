import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';
import { getActiveStyle } from './utils';

export const Nav = () => (
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
      to="/signin"
    >
      Sign In

    </NavLink>
    <NavLink
      style={getActiveStyle}
      to="/register"
    >
      Register

    </NavLink>
    <NavLink
      style={getActiveStyle}
      to="/users"
    >
      Users

    </NavLink>
    <NavLink
      style={getActiveStyle}
      to="/todolist"
    >
      To Do List

    </NavLink>
  </nav>
);
