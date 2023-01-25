import classNames from 'classnames/bind';
import React, { Component } from 'react';
import styles from './Aside.module.scss';
import { Nav } from './Nav/Nav';

const cx = classNames.bind(styles);

export class Aside extends Component {
  render() {
    const { isOpenAside } = this.props;
    return (
      <aside className={
        cx(
          'aside',
          {
            open: isOpenAside,

          },
        )
}
      >
        <Nav />

      </aside>
    );
  }
}
