import React, { Component } from 'react';

import styles from './Home.module.scss';
import { Header } from '../../components/Header/Header';
import { Aside } from '../../components/Aside/Aside';

// const cx = classNames.bind(styles);

export class Home extends Component {
  state = {
    isOpenAside: false,
  };

  handleToggleAside = () => {
    const { isOpenAside } = this.state;
    this.setState({ isOpenAside: !isOpenAside });
  };

  render() {
    const { isOpenAside } = this.state;
    return (

      <div className={styles.box}>
        <Aside isOpenAside={isOpenAside} />
        <div className={styles.cont}>
          <Header openAside={this.handleToggleAside} />
        </div>
      </div>
    );
  }
}
