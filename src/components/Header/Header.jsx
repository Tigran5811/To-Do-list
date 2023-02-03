import React, { Component } from 'react';
import './Header.module.scss';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import { Consumer } from '../../context/AuthContext';

export class Header extends Component {
  render() {
    const { openAside } = this.props;
    return (
      <Consumer>
        { ({ handleLogOut }) => (
          <header>
            <Button onClick={openAside} type="button" text="Nav bar" />
            <Link onClick={handleLogOut} to="/login">Log Out</Link>

          </header>
        )}
      </Consumer>

    );
  }
}
