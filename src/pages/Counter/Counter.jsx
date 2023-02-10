import React from 'react';
import classNames from 'classnames/bind';
import styles from './Counter.module.scss';
import { Button } from '../../ui-kit/components/Button/Button';
import { dialogs } from '../../constants/dialogs';
import { withDialog } from '../../hocs/withDialog';

const cx = classNames.bind(styles);

const Counter = ({ openDialog }) => {
  const onOpenDialog = () => {
    openDialog(dialogs.CounterDialog);
  };

  return (
    <div className={cx('box1', {})}>
      <Button onClick={onOpenDialog} type="button" text="Open Modal" />
    </div>

  );
};

export default withDialog(Counter);
