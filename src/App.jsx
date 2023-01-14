import React, { Component } from 'react';
import className from 'classnames/bind';
import { Button } from './components/Button/Button';
import styles from './style.scss';
import { Aside } from './components/Aside/Aside';
import { Modal } from './components/Modal/Modal';

const cx = className.bind(styles);

export class App extends Component {
  state = {
    count: 0,
    isOpenAside: false,
    isOpenModal: false,
  };

  handleToggleAside = () => {
    // e.stopPropagation();
    const { isOpenAside } = this.state;
    this.setState({ isOpenAside: !isOpenAside });
  };

  handleToggleModal = (e) => {
    e.stopPropagation();
    const { isOpenModal } = this.state;
    this.setState({ isOpenModal: !isOpenModal });
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
    const { isOpenAside, isOpenModal, count } = this.state;
    return (
      <div className={cx('cont', { container: isOpenAside || isOpenModal })}>
        <Aside isOpenAside={isOpenAside} placement="right" />
        <Modal isOpenAside={isOpenModal}>
          <div className={cx('btn_cont')}>
            <Button onClick={this.handleAddition} type="button" text="addition" />
            <Button onClick={this.handleDeduction} type="button" text="deduction" />
          </div>
          <h1 className={cx('h1')}>{count}</h1>
        </Modal>
        <div className={cx('box')}>
          <Button onClick={this.handleToggleAside} type="button" text={isOpenAside ? 'Close Aside' : 'Open Aside'} />
          <Button onClick={this.handleToggleModal} type="button" text={isOpenModal ? 'Close Modal' : 'Open Modal'} />
        </div>
      </div>
    );
  }
}
