import Modal from 'react-modal';
import React from 'react';
import { customStyles } from './constants';
import { Button } from '../Button/Button';
import { withDialog } from '../../../hocs/withDialog';

Modal.setAppElement('#root');

class Dialog extends React.Component {
  render() {
    const {
      isOpen, closeDialog, label, children,
    } = this.props;
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={closeDialog}
        style={customStyles}
        contentLabel={label}
      >
        <Button
          onClick={closeDialog}
          type="button"
          text="Close Dialog"
        />
        {children}
      </Modal>
    );
  }
}

export default withDialog(Dialog);
