import React, { Component } from 'react';
import className from 'classnames/bind';
import { Button } from './components/button/Button';
import styles from './style.scss';

const cx = className.bind(styles);

export class App extends Component {
  state = {
    isOpenAside: false,
    isOpenModal: false,
  };

  handleToggleAside = () => {
    const { isOpenAside } = this.state;
    this.setState({ isOpenAside: !isOpenAside });
  };

  handleToggleModal = () => {
    const { isOpenModal } = this.state;
    this.setState({ isOpenModal: !isOpenModal });
  };

  render() {
    return (
      <div>
        <div className={cx('box')}>
          <Button onClick={this.handleToggleAside} type="button" text={this.isOpenAside ? 'Close Aside' : 'Open Aside'} />
          <Button onClick={this.handleToggleModal} type="button" text={this.isOpenAside ? 'Close Modal' : 'Open Modal'} />
        </div>
      </div>
    );
  }
}
