/* eslint-disable @typescript-eslint/no-unused-vars */
import { MouseEvent } from 'react';
//component
import LogItem from './log-item/log-item';
import { ButtonDeleteWithConfirm, DeleteButton } from '../../';
//variables
import { CounterText, InterfaceText } from '../../../variables';
//icons
import { CloseIcon } from '../../../icons';
//types
import type { ILogs } from '../../../types';
//styles
import style from './logs-modal.module.scss';

interface ILogsModalProps {
  logsData: ILogs;
  closeModal: () => void;
  clearData: () => void;
}

const LogsModal = ({ logsData, closeModal, clearData }: ILogsModalProps) => {
  const generateLogs = (): JSX.Element[] => {
    const logsArray: JSX.Element[] = [];
    for (const key in logsData) {
      logsArray.push(<LogItem log={logsData[key].log} logName={key} key={key} />);
    }
    return logsArray;
  };

  const onModalBackgroundClickHandler = () => {
    closeModal();
  };

  const onCloseButtonClickHandler = () => {
    closeModal();
  };

  const clearDataHandler = () => {
    clearData();
  };

  const onClearDataButtonClickHandler = () => {
    // clearData();
  };

  const stopImmediatePropagation = (evt: MouseEvent<HTMLDivElement>) => {
    evt.stopPropagation();
  };

  return (
    <div className={`${style['logs-modal']}`} onClick={onModalBackgroundClickHandler}>
      <div className={`${style['logs-modal__content']}`} onClick={stopImmediatePropagation}>
        <div className={style['logs-modal__header']}>
          <h3 className="content-primary-a heading-small">Logi licznika</h3>
          <button
            className={style['logs-modal__close-btn']}
            type="button"
            onClick={onCloseButtonClickHandler}
          >
            <span className="visually-hidden">{InterfaceText.CLOSE_MODAL}</span>
            <CloseIcon size={{ width: 30, height: 30 }} />
          </button>
        </div>
        {generateLogs()}

        <div className={style['logs-modal__controls']}>
          {/* <ButtonDeleteWithConfirm
            text={CounterText.CLEAR_COUNTER_DATA}
            clickHandler={onClearDataClickHandler}
          /> */}
          <DeleteButton
            text={CounterText.CLEAR_COUNTER_DATA}
            clickHandler={onClearDataButtonClickHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default LogsModal;
