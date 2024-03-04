//components
import { DeleteButton } from '../../../';
//layouts
import { ModalLayout } from '../../../../layouts';
//variables
import { CounterText, InterfaceText } from '../../../../variables';
//icons
import { CloseIcon } from '../../../../icons';
//styles
import style from './logs-modal-body.module.scss';

interface ILogsModalBodyProps {
  closeModalClickHandler: () => void;
  openConfirmDeletingModal: () => void;
  logs: JSX.Element[];
}

const LogsModalBody = ({
  closeModalClickHandler,
  logs,
  openConfirmDeletingModal,
}: ILogsModalBodyProps): JSX.Element => {
  return (
    <ModalLayout onOverlayClickHandler={closeModalClickHandler}>
      <section className={style['logs-modal-body']}>
        <div className={style['logs-modal-body__header']}>
          <h3 className="content-primary-a heading-small">Logi licznika</h3>
          <button
            className={style['logs-modal-body__close-btn']}
            type="button"
            onClick={closeModalClickHandler}
          >
            <span className="visually-hidden">{InterfaceText.CLOSE_MODAL}</span>
            <CloseIcon size={{ width: 30, height: 30 }} />
          </button>
        </div>

        {logs}

        <div className={style['logs-modal-body__controls']}>
          <DeleteButton
            text={CounterText.CLEAR_COUNTER_DATA}
            clickHandler={openConfirmDeletingModal}
          />
        </div>
      </section>
    </ModalLayout>
  );
};

export default LogsModalBody;
