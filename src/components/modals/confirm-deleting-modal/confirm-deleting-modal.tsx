//layouts
import { DeleteButton, ButtonTertiarySmall } from '../..';
import { ModalLayout } from '../../../layouts';
//variables
import { CounterText, InterfaceText } from '../../../variables';
//styles
import style from './confirm-deleting-modal.module.scss';

interface IConfirmDeletingModalProps {
  onCancelButtonClickHandler: () => void;
  confirmButtonClickHandler: () => void;
}

const ConfirmDeletingModal = ({
  onCancelButtonClickHandler,
  confirmButtonClickHandler,
}: IConfirmDeletingModalProps): JSX.Element => {
  return (
    <ModalLayout onOverlayClickHandler={onCancelButtonClickHandler}>
      <section className={style['confirm-deleting-modal']}>
        <h3 className="content-primary-a heading-small">
          {CounterText.CLEAR_COUNTER_HISTORY_CONFIRM}
        </h3>
        <ButtonTertiarySmall
          clickHandler={onCancelButtonClickHandler}
          text={InterfaceText.CANCEL_DELETING}
        />
        <DeleteButton
          clickHandler={confirmButtonClickHandler}
          text={InterfaceText.CONFIRM_DELETING}
        />
      </section>
    </ModalLayout>
  );
};

export default ConfirmDeletingModal;
