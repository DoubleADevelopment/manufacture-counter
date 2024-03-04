import { useState } from 'react';
//component
import LogItem from './log-item/log-item';
import { ConfirmDeletingModal } from '../../';
import LogsModalBody from './logs-modal-body/logs-modal-body';
//types
import type { ILogs } from '../../../types';

interface ILogsModalProps {
  logsData: ILogs;
  closeModal: () => void;
  clearData: () => void;
}

const LogsModal = ({ logsData, closeModal, clearData }: ILogsModalProps) => {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState<boolean>(false);

  const generateLogs = (): JSX.Element[] => {
    const logsArray: JSX.Element[] = [];
    for (const key in logsData) {
      logsArray.push(<LogItem log={logsData[key].log} logName={key} key={key} />);
    }
    return logsArray;
  };

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
          logs={generateLogs()}
          openConfirmDeletingModal={openConfirmDeletingModal}
        />
      )}
    </>
  );
};

export default LogsModal;
