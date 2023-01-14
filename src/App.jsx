import React, { Component } from 'react';
import className from 'classnames/bind';
import { Button } from './components/button/Button';
import styles from './style.scss';
import { Aside } from './components/Aside/Aside';

const cx = className.bind(styles);

export class App extends Component {
  state = {
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

  render() {
    const { isOpenAside, isOpenModal } = this.state;
    return (
      <div>
        <Aside isOpenAside={isOpenAside} placement="right" />
        <div className={cx('box')}>
          <Button onClick={this.handleToggleAside} type="button" text={isOpenAside ? 'Close Aside' : 'Open Aside'} />
          <Button onClick={this.handleToggleModal} type="button" text={isOpenModal ? 'Close Modal' : 'Open Modal'} />
        </div>
      </div>
    );
  }
}
