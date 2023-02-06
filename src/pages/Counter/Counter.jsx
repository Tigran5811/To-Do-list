import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Counter.module.scss';
import { Button } from '../../ui-kit/components/Button/Button';
import { dialogs } from '../../constants/dialogs';
import { withDialog } from '../../hocs/withDialog';

const cx = classNames.bind(styles);

class Counter extends Component {
  onOpenDialog = () => {
    const { openDialog } = this.props;
    openDialog(dialogs.CounterDialog);
  };

  render() {
    return (
      <div className={cx('box1', { })}>
        <Button onClick={this.onOpenDialog} type="button" text="Open Modal" />
      </div>

    );
  }
}

export default withDialog(Counter);
