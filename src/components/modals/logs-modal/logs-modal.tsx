import { useState } from 'react';
//component
import LogsModalBody from './logs-modal-body/logs-modal-body';
import { ConfirmDeletingModal } from '../../';
//variables
import { CounterText } from '../../../variables';
//types
import type { ICounters } from '../../../types';

interface ILogsModalProps {
  counters: ICounters;
  closeModal: () => void;
  clearData: () => void;
}

const LogsModal = ({ counters, closeModal, clearData }: ILogsModalProps) => {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState<boolean>(false);

  const closeModalClickHandler = () => {
    closeModal();
  };

  const clearDataHandler = () => {
    clearData();
  };

  const openConfirmDeletingModal = () => {
    setIsConfirmModalOpen(true);
  };

  const closeConfirmDeletingModal = () => {
    setIsConfirmModalOpen(false);
  };

  return (
    <>
      {isConfirmModalOpen ? (
        <ConfirmDeletingModal
          modalTitle={CounterText.CLEAR_COUNTER_HISTORY_CONFIRM}
          onCancelButtonClickHandler={closeConfirmDeletingModal}
          confirmButtonClickHandler={clearDataHandler}
        />
      ) : (
        <LogsModalBody
          closeModalClickHandler={closeModalClickHandler}
          counters={counters}
          openConfirmDeletingModal={openConfirmDeletingModal}
        />
      )}
    </>
  );
};

export default LogsModal;
