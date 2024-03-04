//layouts
import { DeleteButton, SystemSecondaryButton } from '../..';
import { ModalLayout } from '../../../layouts';
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
        <h4>Clear your chat history - are you sure?</h4>
        <SystemSecondaryButton clickHandler={onCancelButtonClickHandler} text="anulować" />
        <DeleteButton clickHandler={confirmButtonClickHandler} text="Potwierdź usunięcie" />
      </section>
    </ModalLayout>
  );
};

export default ConfirmDeletingModal;
