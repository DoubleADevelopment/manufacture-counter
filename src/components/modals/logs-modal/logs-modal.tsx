import { useState } from 'react';
//component
import LogsModalBody from './logs-modal-body/logs-modal-body';
import { ConfirmDeletingModal } from '../../';
//types
import type { ILogs } from '../../../types';

interface ILogsModalProps {
  logsData: ILogs;
  closeModal: () => void;
  clearData: () => void;
}

const LogsModal = ({ logsData, closeModal, clearData }: ILogsModalProps) => {
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
          onCancelButtonClickHandler={closeConfirmDeletingModal}
          confirmButtonClickHandler={clearDataHandler}
        />
      ) : (
        <LogsModalBody
          closeModalClickHandler={closeModalClickHandler}
          logsData={logsData}
          openConfirmDeletingModal={openConfirmDeletingModal}
        />
      )}
    </>
  );
};

export default LogsModal;
