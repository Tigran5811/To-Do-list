import React, { Component } from 'react';
import { Provider } from './index';

export class DialogProvider extends Component {
  state = {
    dialogId: null,
  };

  openDialog = (dialogId) => {
    this.setState({ dialogId });
  };

  closeDialog = () => {
    this.setState({ dialogId: null });
  };

  render() {
    const { children } = this.props;
    const { dialogId } = this.state;
    return (
      <Provider value={{
        dialogId,
        openDialog: this.openDialog,
        closeDialog: this.closeDialog,
      }}
      >
        {children}
      </Provider>
    );
  }
}
