//components
import { ButtonDeleteSmall } from '../../../';
import LogItem from '../log-item/log-item';
//layouts
import { ModalLayout } from '../../../../layouts';
//types
import type { ILogs } from '../../../../types';
//variables
import { CounterText, InterfaceText } from '../../../../variables';
//icons
import { CloseIcon } from '../../../../icons';
//styles
import style from './logs-modal-body.module.scss';

interface ILogsModalBodyProps {
  closeModalClickHandler: () => void;
  openConfirmDeletingModal: () => void;
  logsData: ILogs;
}

const LogsModalBody = ({
  closeModalClickHandler,
  logsData,
  openConfirmDeletingModal,
}: ILogsModalBodyProps): JSX.Element => {
  const generateLogs = (): JSX.Element[] => {
    const logsArray: JSX.Element[] = [];
    for (const key in logsData) {
      logsArray.push(<LogItem log={logsData[key].log} logName={key} key={key} />);
    }
    return logsArray;
  };

  return (
    <ModalLayout onOverlayClickHandler={closeModalClickHandler}>
      <section className={style['logs-modal-body']}>
        <div className={style['logs-modal-body__header']}>
          <h3 className="content-primary-a heading-small">{CounterText.COUNTER_LOGS}</h3>
          <button
            className={style['logs-modal-body__close-btn']}
            type="button"
            onClick={closeModalClickHandler}
          >
            <span className="visually-hidden">{InterfaceText.CLOSE_MODAL}</span>
            <CloseIcon size={{ width: 30, height: 30 }} />
          </button>
        </div>

        {generateLogs()}

        <div className={style['logs-modal-body__controls']}>
          <ButtonDeleteSmall
            text={CounterText.CLEAR_COUNTER_DATA}
            clickHandler={openConfirmDeletingModal}
          />
        </div>
      </section>
    </ModalLayout>
  );
};

export default LogsModalBody;
