import React, { Component } from 'react';
import './Header.module.scss';
import { Button } from '../Button/Button';

export class Header extends Component {
  render() {
    const { openAside } = this.props;
    return (
      <header>
        <Button onClick={openAside} type="button" text="Nav bar" />
      </header>
    );
  }
}
