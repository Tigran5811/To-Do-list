import classNames from 'classnames/bind';
import React, { Component } from 'react';
import styles from './Counter-modal.module.scss';
import { Modal } from '../Modal/Modal';
import { Button } from '../Button/Button';

const cx = classNames.bind(styles);

export class CounterModal extends Component {
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
    const { isOpenModal, handleToggleModal } = this.props;
    return (
      <div
        role="button"
        onClick={handleToggleModal}
        className={cx('container', { openModal: isOpenModal })}
      >
        <Modal
          role="button"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
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
