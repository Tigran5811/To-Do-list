import classNames from 'classnames/bind';
import React, { Component } from 'react';
import styles from './CounterDialog.module.scss';

import { Button } from '../../../ui-kit/components/Button/Button';
import Dialog from '../../../ui-kit/components/Dialog/Dialog';

const cx = classNames.bind(styles);

export class CounterDialog extends Component {
  state = {
    count: 0,
  };

  handleAddition = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };

  handleDeduction = () => {
    const { count } = this.state;
    this.setState({ count: count - 1 });
  };

  render() {
    const { count } = this.state;
    return (
      <Dialog isOpen>
        <div className={cx('btn_cont')}>
          <Button onClick={this.handleAddition} type="button" text="addition" />
          <Button onClick={this.handleDeduction} type="button" text="deduction" />
        </div>
        <h1 className={cx('h1')}>{count}</h1>
      </Dialog>
    );
  }
}
