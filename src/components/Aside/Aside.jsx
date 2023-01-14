import classNames from 'classnames/bind';
import React, { Component } from 'react';
import styles from './Aside.module.scss';

const cx = classNames.bind(styles);

export class Aside extends Component {
  render() {
    const { isOpenAside, placement } = this.props;
    return (
      <aside className={
        cx(
          'aside',
          {
            open: isOpenAside,
            left: placement === 'left',
            top: placement === 'top',
            right: placement === 'right',
            bottom: placement === 'bottom',
          },
        )
}
      />
    );
  }
}
