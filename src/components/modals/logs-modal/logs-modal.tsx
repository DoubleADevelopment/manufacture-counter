import { MouseEvent } from 'react';
//component
import LogItem from './log-item/log-item';
//variables
import { InterfaceTest } from '../../../variables';
//icons
import { CloseIcon } from '../../../icons';
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

  const onModalBackgroundClickHandler = (evt: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    const target = evt.target as HTMLElement;
    const dataCloseModal = target.getAttribute('data-close-modal');

    if (dataCloseModal !== null) {
      closeModal();
    }
  };

  const onCloseButtonClickHandler = () => {
    closeModal();
  };

  return (
    <div
      className={style['logs-modal']}
      onClick={onModalBackgroundClickHandler}
      data-close-modal="true"
    >
      <div className={style['logs-modal__content']}>
        {generateLogs()}
        <button
          className={style['logs-modal__close-btn']}
          type="button"
          onClick={onCloseButtonClickHandler}
        >
          <span className="visually-hidden">{InterfaceTest.CLOSE_MODAL}</span>
          <CloseIcon />
        </button>

        <button type="button">clear data</button>
      </div>
    </div>
  );
};

export default LogsModal;
