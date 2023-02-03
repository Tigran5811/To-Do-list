import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Counter.module.scss';
import { CounterModal } from '../../components/Counter-modal/Counter-modal';
import { Button } from '../../components/Button/Button';

const cx = classNames.bind(styles);

export class Counter extends Component {
  state = {
    isOpenModal: false,
  };

  handleToggleModal = (e) => {
    e.stopPropagation();
    const { isOpenModal } = this.state;
    this.setState({ isOpenModal: !isOpenModal });
  };

  render() {
    const { isOpenModal } = this.state;
    return (
      <div className={cx('box1', { isOpenModal })}>
        <Button onClick={this.handleToggleModal} type="button" text={isOpenModal ? 'Close Modal' : 'Open Modal'} />
        <CounterModal isOpenModal={isOpenModal} handleToggleModal={this.handleToggleModal} />
      </div>

    );
  }
}
