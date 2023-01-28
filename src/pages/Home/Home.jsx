import React, { Component } from 'react';
import styles from './Home.module.scss';
import { Header } from '../../components/Header/Header';
import { Aside } from '../../components/Aside/Aside';

export class Home extends Component {
  state = {
    isOpenAside: false,
  };

  handleToggleAside = () => {
    const { isOpenAside } = this.state;
    this.setState({ isOpenAside: !isOpenAside });
  };

  handleLogOut = () => {
    localStorage.removeItem('token');
  };

  render() {
    const { isOpenAside } = this.state;
    return (

      <div className={styles.box}>
        <Aside isOpenAside={isOpenAside} />
        <div className={styles.cont}>
          <Header openAside={this.handleToggleAside} logOut={this.handleLogOut} />
        </div>
      </div>
    );
  }
}
