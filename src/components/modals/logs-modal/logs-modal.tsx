import { MouseEvent } from 'react';
//component
import LogItem from './log-item/log-item';
//types
import type { ILogsType } from '../../../types';
//styles
import style from './logs-modal.module.scss';

interface ILogsModalProps {
  logsData: ILogsType;
  closeModal: () => void;
}

const LogsModal = ({ logsData, closeModal }: ILogsModalProps) => {
  const generateLogs = (): JSX.Element[] => {
    const logsArray: JSX.Element[] = [];
    for (const key in logsData) {
      logsArray.push(<LogItem log={logsData[key].log} logName={key} key={key} />);
    }
    return logsArray;
  };

  const onCloseModalClickHandler = (evt: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    const target = evt.target as HTMLElement;
    const dataCloseModal = target.getAttribute('data-close-modal');

    if (dataCloseModal !== null) {
      closeModal();
    }
  };

  return (
    <div className={style['logs-modal']} onClick={onCloseModalClickHandler} data-close-modal="true">
      <div className={style['logs-modal__content']}>
        {generateLogs()}
        <button type="button" onClick={onCloseModalClickHandler} data-close-modal="true">
          close modal
        </button>
      </div>
    </div>
  );
};

export default LogsModal;
