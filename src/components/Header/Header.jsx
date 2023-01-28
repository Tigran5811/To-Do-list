import React, { Component } from 'react';
import './Header.module.scss';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';

export class Header extends Component {
  render() {
    const { openAside, logOut } = this.props;
    return (
      <header>
        <Button onClick={openAside} type="button" text="Nav bar" />
        <Link onClick={logOut} to="/login">Log Out</Link>

      </header>
    );
  }
}
