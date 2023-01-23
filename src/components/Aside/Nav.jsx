import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';

const activeStyle = {
  backgroundColor: 'red',
  borderRadius: '10px',
  padding: '5px 10px',
};

export class Nav extends Component {
  render() {
    return (
      <nav className={styles.nav}>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/"
        >
          Home

        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/counter"
        >
          Counter

        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/login"
        >
          Login

        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/register"
        >
          Register

        </NavLink>
      </nav>
    );
  }
}
