import classNames from 'classnames/bind';
import React, { Component } from 'react';
import styles from './Counter-modal.module.scss';
import { Modal } from '../Modal/Modal';
import { Button } from '../Button/Button';

const cx = classNames.bind(styles);

export class CounterModal extends Component {
  state = {
    count: 0,
    close: false,
  };

  handleAddition = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };

  handleDeduction = () => {
    const { count } = this.state;
    this.setState({ count: count - 1 });
  };

  HandleClose = () => {
    const { close } = this.state;
    this.setState({ close: !close });
    console.log(close);
  };

  render() {
    const { count, close } = this.state;
    const { isOpenModal } = this.props;

    return (
      <div
        role="button"
        onClick={this.HandleClose}
        className={cx({ container: isOpenModal, close_modal: close })}
      >
        <Modal isOpenModal={isOpenModal}>
          <div className={cx('btn_cont')}>
            <Button onClick={this.handleAddition} type="button" text="addition" />
            <Button onClick={this.handleDeduction} type="button" text="deduction" />
          </div>
          <h1 className={cx('h1')}>{count}</h1>
        </Modal>
      </div>
    );
  }
}
