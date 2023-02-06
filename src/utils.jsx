import React from 'react';
import { CounterDialog } from './components/dialogs/CounterDialog/CounterDialog';
import { dialogs } from './constants/dialogs';

export const renderDialog = (dialogId) => {
  switch (dialogId) {
    case dialogs.CounterDialog:
      return <CounterDialog />;
    default:
      return null;
  }
};
