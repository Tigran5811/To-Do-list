import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Counter.module.scss';
import { CounterModal } from '../../components/Counter-modal/Counter-modal';
import { Button } from '../../components/Button/Button';
import { Aside } from '../../components/Aside/Aside';
import { Header } from '../../components/Header/Header';

const cx = classNames.bind(styles);

export class Counter extends Component {
  state = {
    isOpenModal: false,
    isOpenAside: false,
  };

  handleToggleModal = (e) => {
    e.stopPropagation();
    const { isOpenModal } = this.state;
    this.setState({ isOpenModal: !isOpenModal });
  };

  handleToggleAside = () => {
    const { isOpenAside } = this.state;
    this.setState({ isOpenAside: !isOpenAside });
  };

  handleLogOut = () => {
    localStorage.removeItem('token');
  };

  render() {
    const { isOpenModal, isOpenAside } = this.state;
    return (

      <div className={styles.box}>
        <Aside isOpenAside={isOpenAside} />
        <div className={styles.cont}>
          <Header openAside={this.handleToggleAside} logOut={this.handleLogOut} />
          <div className={cx('box1', { isOpenModal })}>
            <Button onClick={this.handleToggleModal} type="button" text={isOpenModal ? 'Close Modal' : 'Open Modal'} />
            <CounterModal isOpenModal={isOpenModal} handleToggleModal={this.handleToggleModal} />
          </div>

        </div>
      </div>
    );
  }
}
